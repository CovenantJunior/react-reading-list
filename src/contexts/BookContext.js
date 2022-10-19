import React, { createContext, useState} from 'react';
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
    const [books, dispatch] = useReducer(bookReducer, [
        {id: uuidv4(), title: 'Things Fall Apart', author: "Chinua Achebe"},
        {id: uuidv4(), title: 'Who The Cap Fits', author: "Bob Marley"},
        {id: uuidv4(), title: 'The Bartender', author: "T-Pain"},
        {id: uuidv4(), title: 'Sparing The Rod', author: "Unknown"}
    ]);

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;
