import styles from './BookSaleCard.module.css';

/**
 * Create a card with information of a book
 * @param {string} title - book title
 * @param {string} author - book author
 * @param {string} price - book price
 * @returns a card component
 */
function BookSaleCard({ title, author, price }){
    return(
        <div className={styles.container}>
            <p>{title}</p>
            <p>{author}</p>
            <p>{price}</p>
        </div>
    )
}

export default BookSaleCard;