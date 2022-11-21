function Button(props) {
    return (
        <button type={props.type} className={props.className}>{props.content}</button>
    )
};

export default Button;

//button not rendering