import styles from './BookSaleCard.module.css';

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