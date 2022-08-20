import styles from './SubmitButton.module.css';

/**
 * Create a button with personalized text
 * @param {string} text - personalized text for the button 
 * @returns a button component
 */
function SubmitButton({text}){
    return(
        <button className={styles.container}>{text}</button>
    )
}

export default SubmitButton;