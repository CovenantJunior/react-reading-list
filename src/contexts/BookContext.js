import React, { createContext, useState} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {id: 1, title: 'Things Fall Apart', author: "Chinua Achebe"},
        {id: 2, title: 'Who The Cap Fits', author: "Bob Marley"},
        {id: 3, title: 'The Bartender', author: "T-Pain"},
        {id: 4, title: 'Sparing The Rod', author: "Unknown"}
    ]);
    
    const addBook = (title, author) => {
        setBooks([...books, {id: Date.now(), title: title, author: author}]);
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }
    
    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;
