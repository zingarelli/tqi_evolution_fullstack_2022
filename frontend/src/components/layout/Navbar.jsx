import { Link } from 'react-router-dom'

import ActionCard from '../cards/ActionCard';

import styles from './Navbar.module.css';
import book from '../../img/addBook.png';
import purchase from '../../img/addPurchase.png';
import order from '../../img/addOrder.png';

// Creates header menu, with logo and links to other pages
function Navbar(){
    return(
        <nav className={styles.menu}>
            <Link to='/'><h1 className={styles.title}>SisCoVEL</h1></Link>
            <ul className={styles.actions}>
                <li>
                    <Link to='/book'>
                        <ActionCard text="Novo Livro" icon={book} size='small' />
                    </Link>
                </li>
                <li>
                    <Link to='/purchase'>
                        <ActionCard text="Nova Compra" icon={purchase} size='small' />
                    </Link>
                </li>
                <li>
                    <Link to='/sale'>
                        <ActionCard text="Nova Venda" icon={order} size='small' />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;