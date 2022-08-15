import { Link } from 'react-router-dom'
import Card from '../cards/Card';
import book from '../../img/addBook.png';
import purchase from '../../img/addPurchase.png';
import order from '../../img/addOrder.png';

function Home(){
    return(
        <>
        <Link to='/book'>
            <Card text="Novo Livro" icon={book} />
        </Link>
        <Link to='/purchase'>
            <Card text="Nova Compra" icon={purchase} />
        </Link>
        <Link to='/sale'>
            <Card text="Nova Venda" icon={order} />
        </Link>
        </>
    )
}

export default Home;