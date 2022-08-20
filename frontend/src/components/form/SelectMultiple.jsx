import { useState } from "react";

import BookSaleCard from "../cards/BookSaleCard";

import styles from './SelectMultiple.module.css';

/**
 * Create a fieldset of "selectable" cards
 * @param {array} items - list of objects to be rendered
 * @param {string} legend - text for fieldset legend
 * @param {string} handleOnChange - method that will handle onChange event (needs to be implemented by the caller) 
 * @returns multiple selectable cards
 */
function SelectMultiple({ items, legend, handleOnChange, handleSubmit }){    
    const [quantity, setQuantity] = useState('');
    
    function addInput(e){
        setQuantity(e.target.value);
    }

    return(
        <fieldset className={styles.container}>
            <legend>{legend}</legend>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                {items.map((item) => (
                    // TODO: create a checkbox component?
                    // TODO: hide checkbox and add a thicker border when item is clicked
                    // TODO: value in the input text is being replicated to all inputs. Why?
                    <div key={item.id} className={styles.item}>
                        <input 
                            type="checkbox"
                            name={item.id} 
                            id={item.id} 
                            value={item.id}
                            onChange={handleOnChange}
                        />
                        <label htmlFor={item.id}>
                            <BookSaleCard                             
                                title={item.title}
                                author={item.author}
                                price="fetch do preço no inventory"
                            />
                        </label>
                        <input 
                            type="text"
                            placeholder="Quantidade"
                            name="quantity"
                            id={item.id} 
                            value={quantity}
                            handleOnChange={addInput}
                        />
                    </div>
                ))}
            </form>
        </fieldset>
    )
}

export default SelectMultiple;