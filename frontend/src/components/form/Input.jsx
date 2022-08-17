import styles from './Input.module.css';

/**
 * Create an input and associated label
 * @param {string} type - input type attribute 
 * @param {string} lblText - text for label
 * @param {string} name - input name attribute
 * @param {string} placeholder - input placeholder attribute
 * @param {string} value - input value attribute
 * @param {string} handleOnChange - method that will handle onChange event
 * @returns input component
 */
function Input({ type, lblText, name, placeholder, value, handleOnChange }){
    return(
        <div className={styles.container}>
            <label htmlFor={name}>{lblText}</label>
            <input 
                type={type} 
                placeholder={placeholder} 
                name={name} 
                id={name} 
                onChange={handleOnChange} /* parent will handle onchange event */
                value={value || ''} 
                required
            />
        </div>
    )
}

export default Input;