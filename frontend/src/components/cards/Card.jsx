import styles from './Card.module.css';

/**
 * Create a card, which will act as a button to call the appropriate action
 * @param {string} icon - path to the image
 * @param {string} text - text for the button and alt for the image
 * @returns a card component
 */
function Card({ icon, text }){
    //TODO: correct styles import
    return(
        <button name={text}>
            <img src={icon} alt={text} />
            <span>{text}</span>
        </button>
    )
}

export default Card;