import React, { Component, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';
import BookDetails from '../components/BookDetails';

const BookList = () => {
    const { isLightTheme, light, dark} = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    const theme = isLightTheme ? light : dark;
    return books.length ? ( 
        <div className="book-list" style={{
            color : theme.font,
            background : theme.background,
            borderRadius: theme.border_radius
        }}>
            <p>Click to Remove</p>
            <ul>
            {books.map(book => {
                   return(
                    <BookDetails book={book} key={book.id} />
                   ) 
                })}
            </ul>
        </div>
     ) : (
        <div className="book-list" style={{
            color : theme.font,
            background : theme.background,
            borderRadius: theme.border_radius
        }}>
            No book availale to read right now... Free time!!
        </div>
     );
}
 
export default BookList;