import React, { createContext, useState, useEffect} from 'react';
import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {

    //Using Context
    /*const [books, setBooks] = useState([
        {id: uuidv4(), title: 'Things Fall Apart', author: "Chinua Achebe"},
        {id: uuidv4(), title: 'Who The Cap Fits', author: "Bob Marley"},
        {id: uuidv4(), title: 'The Bartender', author: "T-Pain"},
        {id: uuidv4(), title: 'Sparing The Rod', author: "Unknown"}
    ]);
    
    const addBook = (title, author) => {
        setBooks([...books, {id: uuidv4(), title: title, author: author}]);
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }
    
    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    );*/

    //Using Reducer
    //Set localStorage Data into State if exists else empty array or dummy data
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        const storage = JSON.parse(localStorage.getItem('books'));
        return storage ? storage : [
            {id: uuidv4(), title: 'Things Fall Apart', author: "Chinua Achebe"},
            {id: uuidv4(), title: 'Who The Cap Fits (Music)', author: "Bob Marley"},
            {id: uuidv4(), title: 'The Bartender (Music)', author: "T-Pain"},
            {id: uuidv4(), title: 'Sparing The Rod', author: "Unknown"},
            {id: uuidv4(), title: 'Harry Potter and the Deathly Hallows', author: "Rowling, J.K."}
        ]        
    });

    //Store in localStorage
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;
