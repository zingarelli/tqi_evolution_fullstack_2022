import { useEffect, useState } from "react";

import Input from "./Input";
import SubmitButton from "./SubmitButton";
import SelectMultiple from "./SelectMultiple";
import Message from "../layout/Message";

import styles from './SaleForm.module.css'

//form to register a sale to a client
function SaleForm(){
    const [sale, setSale] = useState({});
    const [bookList, setBookList] = useState([]); //list of books registered
    const [showMessage, setShowMessage] = useState(false); //control to show a message when an item is added/updated

    //get a list of books registered whenever the page is loaded
    useEffect(() => {
        fetch('http://localhost:5000/books', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((result) => {
                setBookList(result);
            })
            .catch((err) => console.log(err))
    }, []);
    
    //send sale to backend
    function postSale(e){
        e.preventDefault();
        setShowMessage(false); //will be set to true once the post is successfull        

        //send to server
        fetch('http://localhost:5000/sales', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sale)
        })
            .then((response) => response.json())            
            .then((result) => {
                setShowMessage(true);
            })
            .catch((err) => console.log(err))
    }
    
    //add value of an input to the inventory object
    function addInput(e){
        setSale({...sale, [e.target.name]: e.target.value})
    }

    //verify if a book was checked in the book list
    function isBookChecked(e){
        return e.target.checked;
    }
    
    return(
        // TODO: Desistir da ideia de MultipleSelect. Criar um componente que seleciona um livro, um campo para adicionar a quantidade e um botão de submissão. Ao submeter, atualiza o total de livros e o valor total da venda. Criar um botão "adicionar livro" que chama esse componente. Não dá para ter um form dentro de um form, então esse componente deve ter um botão e aí ver se dá para tratar no onsubmit do botão ou se há algum outro evento que pode ser utilizado para tratar por quem chamar o componente.

        <form onSubmit={postSale} className={styles.container}>
            {
                //content to be shown when inventory is successfully added/updated
                showMessage && <Message text='Venda salva com sucesso!' />
            }
            <Input 
                type='text'
                lblText='Nome do cliente'
                name='customer'
                placeholder='Digite o nome do cliente...'
                value={sale.customer}
                handleOnChange={addInput}
                
            />
            <SelectMultiple items={bookList} legend="Selecione os livros" handleOnChange={isBookChecked} />
            <p>Total da Venda: R$ XX.XX</p>
            <SubmitButton text="Salvar venda" />
        </form>
    )
}

export default SaleForm;