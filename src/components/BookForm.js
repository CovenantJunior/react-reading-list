import React, { useContext, useState  } from 'react';
import { BookContext} from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookForm = () => {
    const { addBook } = useContext(BookContext);
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