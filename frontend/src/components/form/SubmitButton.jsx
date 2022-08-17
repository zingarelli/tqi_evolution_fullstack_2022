import styles from './SubmitButton.module.css';

function SubmitButton({text}){
    return(
        <button className={styles.container}>{text}</button>
    )
}

export default SubmitButton;