import { useState, useEffect } from "react";

import styles from './Message.module.css';

/**
 * Shows a "flash message", that will appear for only a few seconds
 * @param {string} text - text to be shown 
 * @returns a p element
 */
function Message({ text }){
    const [visible, setVisible] = useState(false);

    useEffect(() =>{
        setVisible(true);
        // TODO: should we set the timeout value as a prop, so it can be changed dinamically?
        setTimeout(() => {
            setVisible(false);
        }, 3000);
    }, [text]);
    
    return(
        <>
            {visible && <p className={styles.message}>{text}</p> }
        </>
    )
}

export default Message;