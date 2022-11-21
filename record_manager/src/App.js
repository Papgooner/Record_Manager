import './App.css';
import AddUser from './pages/AddUser/AddUserPage';
import UserList from './pages/UserList/UserList';
import { useState } from "react";
import styles from "./pages/AddUser/AddUserPage.module.css";
import Card from './components/Card';

function App() {
  const [usersList, setUsersList] = useState([]);
  const [isShownAddUser, setIsShownAddUser] = useState(false);
  const [isShownNewUser, setIsShownNewUser] = useState(true);
  const [isShownCancel, setIsShownCancel] = useState(false);
  function clickHandler() {
    setIsShownAddUser(true);
    setIsShownNewUser(false);
    setIsShownCancel(true);
  };
  function closeAddUser() {
    setIsShownCancel(false);
    setIsShownAddUser(false);
    setIsShownNewUser(true);
  };
  function addUserHandler(uName, uAge, close) {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }]
    });
    setIsShownAddUser(false);
    setIsShownCancel(false);
    setIsShownNewUser(true);
  };
  return (
    <div className="App">
      <Card className={styles.appCard}>
      <h1>Current Users</h1>
      {isShownNewUser && (
        <button className={styles.button} onClick={clickHandler}>New User</button>
      )}
      {isShownAddUser && (
        <AddUser passUp={addUserHandler} />
      )
      }
    {isShownCancel && (
      <button className={styles.cancel} onClick={closeAddUser}>Cancel</button>
    )
}
      <UserList users={usersList} />
      </Card>
    </div>
  );
}

export default App;
