import { useState } from "react";
import Message from "../layout/Message";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

//form to add a book
function BookForm(){
    const [book, setBook] = useState({});
    const [showMessage, setShowMessage] = useState(false);

    //send a book to backend
    function postBook(e){
        setShowMessage(false);
        e.preventDefault();
        //send to server
        fetch('http://localhost:5000/books', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then((response) => response.json())
            //TODO: add message on success
            .then((result) => {
                setShowMessage(true);
                setBook('');
            })
            .catch((err) => console.log(err))
    }
    //add value of an input to a book object
    function addInput(e){
        setBook({...book, [e.target.name]: e.target.value})
    }
    
    return(
        <form onSubmit={postBook}>
            {
                //content to be shown when a book is successfully registered
                showMessage && <Message text='Livro Cadastrado com Sucesso' />
            }
            <Input 
                type='text'
                lblText='Título:'
                name='title'
                placeholder='Digite o título do livro...'
                value={book.title}
                handleOnChange={addInput}
            />
            <Input 
                type='text'
                lblText='Autor/Autora:'
                name='author'
                placeholder='Digite o nome do autor/autora...'
                value={book.author}
                handleOnChange={addInput}
            />
            <Input 
                type='text'
                lblText='Editora:'
                name='publisher'
                placeholder='Digite o nome da Editora...'
                value={book.publisher}
                handleOnChange={addInput}
            />
            {/* 
                Needs to add an input of type='file' and store the image.
            */}
            <p>--- Falta implementar o input de arquivo para upload da capa do livro.</p> <br />
            <Input 
                type='number'
                lblText='Ano de Publicação:'
                name='year'
                placeholder='Digite o ano de publicação...'
                value={book.year}
                handleOnChange={addInput}
            />
            <SubmitButton text="Salvar Livro" />
        </form>
    )
}

export default BookForm;