import { useState } from "react";
import ErrorModal from "../../components/ErrorModal";
import Button from "../../components/Button";
import styles from "./AddUserPage.module.css";

function AddUser(props) {
    const [nameValue, setNameValue] = useState("");
    const [ageValue, setAgeValue] = useState("");
    const [error, setError] = useState();
    const [content, setContent] = useState("Submit");

    function submitHandler(event) {
        event.preventDefault();
        const nameData = nameValue;
        const ageData = ageValue;
        if (nameData.trim().length === 0 || ageValue.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please input a valid name and age (non-empty values)."
            });
            console.log(error);
            return;
        }
        if (+ageData > 122) {
            setError({
                title: "Invalid age",
                message: "The oldest person to ever live was 122. Your age is likely significantly lower. (input < 122)."
            });
            console.log(error);
            return;
        }
        if (+ageData < 1) {
            setError({
                title: "Invalid age",
                message: "Please input a valid age (input > 1)."
            });
            return;
        }
        props.passUp(nameData, ageData);
    };
    function nameChangeHandler(event) {
        setNameValue(event.target.value);
        setError(false);
    };
    function ageChangeHandler(event) {
        setAgeValue(event.target.value);
        setError(false);
    };

    function errorHandler() {
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <form className={styles.addUserForm} onSubmit={submitHandler}>
                <label htmlFor="id" className={styles.inputText}>Name</label>
                <input id="name" className={styles.input} type="text" onChange={nameChangeHandler} />
                <label htmlFor="age" className={styles.inputText}>Age</label>
                <input id="age" type="number" className={styles.input} onChange={ageChangeHandler} />
                <Button type="submit" className={styles.submit} content={"Submit"}></Button>
            </form>
        </div>
    )
}

export default AddUser;
