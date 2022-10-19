import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookDetails = ({ book }) => {

    //Using State
    /*const { removeBook } = useContext(BookContext);
    const { isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <li style={{background: theme.bg}} onClick={() => removeBook(book.id)}>
            <div className="name">{ book.title }</div>
            <div className="name" ><b>{ book.author }</b></div>
        </li>
    );*/

    //Using Reducer
    const { dispatch } = useContext(BookContext);
    const { isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <li style={{background: theme.bg}} onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>
            <div className="name">{ book.title }</div>
            <div className="name" ><b>{ book.author }</b></div>
        </li>
    );
}
 
export default BookDetails;