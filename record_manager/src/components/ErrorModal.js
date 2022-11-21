import Card from "./Card";
import styles from "./ErrorModal.module.css";
function ErrorModal(props) {
    return (
    <Card className={styles.modal}>
        <h1>{props.title}</h1>
        <p>{props.message}</p>
    </Card>
    )
}

export default ErrorModal;