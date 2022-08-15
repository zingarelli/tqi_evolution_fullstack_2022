import { Link } from 'react-router-dom'
import styles from './Navbar.module.css';

/**
 * Creates header menu, with logo and links to other pages
 */
function Navbar(){
    return(
        <nav className={styles.menu}>
            <Link to='/'><h1 className={styles.title}>SisCoVEL</h1></Link>
            <ul className={styles.actions}>
                <li><Link to='/book'>Novo Livro</Link></li>
                <li><Link to='/purchase'>Nova Compra</Link></li>
                <li><Link to='/sale'>Nova Venda</Link></li>
            </ul>
        </nav>
    )
}


export default Navbar;