import { useState, useEffect } from "react";

import styles from './PurchaseForm.module.css';

import Message from "../layout/Message";
import Input from "./Input";
import Select from "./Select";
import SubmitButton from "./SubmitButton";

//form to add/update inventory with a selected book
function PurchaseForm(){
    const [inventory, setInventory] = useState({}); //list of items in the inventory
    const [bookId, setBookId] = useState(''); //act as the foreign key between books and inventory
    const [inventoryItem, setInventoryItem] = useState({}); //a single item in the inventory
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

    //whenever a book is selected, check if it has items in the inventory
    useEffect(() => {
        fetch(`http://localhost:5000/inventory?bookId=${bookId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((result) => {
                setInventoryItem(result);
            })
            .catch((err) => console.log(err))
    }, [bookId])

    //update the quantity of a book already in the inventory
    function updateInventory(){
        let item = inventory;
        let itemId = inventoryItem[0].id;
        let currentQty = inventoryItem[0].quantity;
        
        item.quantity = parseInt(currentQty) + parseInt(item.quantity);

        fetch(`http://localhost:5000/inventory/${itemId}`, {
                method: 'PATCH', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            })
                .then((response) => response.json())            
                .then((result) => {
                    setShowMessage(true);
                    //clear input values
                    setInventory({...inventory, quantity: '', price: ''});
                    //update view for the selected book
                    inventoryItem[0].quantity = item.quantity;
                    inventoryItem[0].price = item.price;
                })
                .catch((err) => console.log(err))
    }

    //add/update inventory in the backend
    function postPurchase(e){
        setShowMessage(false); //will be set to true once the post is successfull        
        e.preventDefault();

        if (inventoryItem.length > 0) { //book is already in the inventory, so its quantity will be updated
            updateInventory();
        }
        else{ //it's a new item in the inventory
            //send to server
            fetch('http://localhost:5000/inventory', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inventory)
            })
                .then((response) => response.json())            
                .then((result) => {
                    setShowMessage(true);
                    //set quantity and price blank to clear input values
                    setInventory({...inventory, quantity: '', price: ''});
                    //TODO: show in page the quantity and price of the book, or set select options to default
                })
                .catch((err) => console.log(err))
        }

    }

    //add value of an input to the inventory object
    function addInput(e){
        setInventory({...inventory, [e.target.name]: e.target.value})
    }

    //add id from the selected book to the inventory object
    function addSelect(e){
        setBookId(e.target.value); //activate useEffect hook to fetch this book in inventory, if it already exists
        setInventory({...inventory, [e.target.name]: e.target.value});
    }
    
    return(
        <form onSubmit={postPurchase}>
            {
                //content to be shown when inventory is successfully added/updated
                showMessage && <Message text='Estoque atualizado com Sucesso!' />
            }
            { 
                // show options once the list has been loaded 
                bookList.length > 0 ? 
                    <Select 
                        lblText="Selecione um livro"
                        name="bookId"
                        options={bookList}
                        handleOnChange={addSelect}
                    />
                    : //show message while booklist is loading
                    <span>Carregando livros...</span>
            }
            {
                //once a book is selected, if it exists in inventory, show its quantity and price
                inventoryItem.length > 0 && 
                    <div className={styles.inventoryItemDetails}>
                        <span>Quantidade em estoque: {inventoryItem[0].quantity}</span>
                        <span>Preço atual: R$ {inventoryItem[0].price}</span>
                    </div >
            }
            <Input 
                type='number'
                lblText='Quantidade de exemplares:'
                name='quantity'
                placeholder='Digite a quantidade de livros comprados...'
                value={inventory.quantity}
                handleOnChange={addInput}
            />
            <Input 
                type='number'
                lblText='Valor Unitário (R$):'
                name='price'
                placeholder='Digite o valor unitário...'
                value={inventory.price}
                handleOnChange={addInput}
            />
            <SubmitButton text="Adicionar ao estoque" />
        </form>
    )
}

export default PurchaseForm;