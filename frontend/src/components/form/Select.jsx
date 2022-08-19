import styles from './Select.module.css';

/**
 * Create a select, an associated label and options from a given list
 * @param {string} lblText - text for the label
 * @param {string} name - text for attributes name/id and of the select element
 * @param {array} options - list of objects to populate the option elements
 * @param {string} handleOnChange - method that will handle onChange event (needs to be implemented by the caller)
 * @returns a select component
 */
function Select({ lblText, name, options, handleOnChange }){
    return(
        <div className={styles.container}>
            <label htmlFor={name}>{lblText}</label>   
            <select name={name} id={name} required onChange={handleOnChange}>
                <option value="">Selecione uma opção...</option>
                {options.map((item) => (
                    <option key={item.id} value={item.id} >{item.title}</option>
                ))}
            </select>  
        </div>
    )
}

export default Select;