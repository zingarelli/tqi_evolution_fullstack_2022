import BookForm from '../form/BookForm';

//create page to register a new book
function Book(){
    return(
        <div>
            <h1>Cadastro de Livro</h1>
            <BookForm />            
        </div>
    )
}

export default Book;