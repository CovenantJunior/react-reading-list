import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookDetails = ({ book, id }) => {
    const { removeBook } = useContext(BookContext);
    const { isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <li style={{background: theme.bg}} onClick={() => removeBook(book.id)}>
            <div className="name">{ book.title }</div>
            <div className="name">{ book.author }</div>
        </li>
    );
}
 
export default BookDetails;