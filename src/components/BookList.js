import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
    static contextType = ThemeContext;
    state = {  } 
    render() { 
        console.log(this.context);
        const { isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="book-list" style={{
                color : theme.font,
                background : theme.background,
                borderRadius: theme.border_radius
            }}>
                <ul>
                    <li style={{background: theme.bg}}>The Tempest</li>
                    <li style={{background: theme.bg}}>The 7th Voyage of Simbad</li>
                    <li style={{background: theme.bg}}>The Chronicle of Narnia</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;