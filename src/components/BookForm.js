import React, { useContext, useState  } from 'react';
import { BookContext} from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookForm = () => {
    
    //Using State
    /*const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const { isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const handleSubmit = (e) => {
        e.preventDefault();
        if ((title && author) == '') {
            return;
        }
        addBook(title, author);
        setTitle('');
        setAuthor('');
    }*/


    //Using Reducer
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const { isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const handleSubmit = (e) => {
        e.preventDefault();
        if ((title && author) == '') {
            return;
        }
        dispatch({type: 'ADD_BOOK', book: {
            title,
            author
        }});
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder='Book Title' value={title} onChange={(e) => {setTitle(e.target.value)}} />
            <input type="text" name="author" placeholder='Book Author' value={author} onChange={(e) => {setAuthor(e.target.value)}} />
            <input style={{
                color : theme.font,
                background : theme.background,
                borderRadius: theme.border_radius}} type="submit" value="Add Book" />
        </form>
    );
}
 
export default BookForm;