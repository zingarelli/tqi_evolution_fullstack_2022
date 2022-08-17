import styles from './Card.module.css';

/**
 * Create a card, which will act as a link to the appropriate page.
 * A card contains an image and a text
 * @param {string} icon - path to the image
 * @param {string} text - text for the button and alt for the image
 * @param {string} size - size of the card: normal (for main content) or small (for menus)
 * @returns a card component
 */
function Card({ icon, text, size='normal' }){
    return(        
        <div className={`${styles.container} ${styles[size]}`} name={text}>
            <img src={icon} alt={text} />
            <span>{text}</span>
        </div>
    )
}

export default Card;