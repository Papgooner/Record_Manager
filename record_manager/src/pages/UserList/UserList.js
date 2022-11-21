import Card from "../../components/Card";
import styles from "./UserList.module.css";

function UserList(props) {
    return (
        <Card>
         {props.users.map((user) => (
            <li className={styles.listItem} key={user.id}>
                {user.name} ({user.age} years old)
            </li>
         ))}        
         </Card>
    )
}

export default UserList;