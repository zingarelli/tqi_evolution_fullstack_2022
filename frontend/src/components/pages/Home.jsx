import { Link } from 'react-router-dom'

import ActionCard from '../cards/ActionCard';

import styles from './Home.module.css'
import book from '../../img/addBook.png';
import purchase from '../../img/addPurchase.png';
import order from '../../img/addOrder.png';

function Home(){
    return(
        <div className={styles.container}>
        <Link to='/book'>
            <ActionCard text="Novo Livro" icon={book} />
        </Link>
        <Link to='/purchase'>
            <ActionCard text="Nova Compra" icon={purchase} />
        </Link>
        <Link to='/sale'>
            <ActionCard text="Nova Venda" icon={order} />
        </Link>
        </div>
    )
}

export default Home;