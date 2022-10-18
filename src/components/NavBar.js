import React, { Component, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const NavBar = () => {
    const { isAuth, toggleAuth } = useContext(AuthContext);
    const { isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const { books } = useContext(BookContext);
    return ( 
        <nav style={{
            color : theme.font,
            background : theme.background,
            borderRadius: theme.border_radius
        }}>
            <h1><b>Tea's Reading List</b></h1>
            <p>You currently have { books.length } book(s) to go through...</p>
            {/*<button 
                style={{
                    color : theme.font,
                    background : theme.bg,
                    borderRadius: theme.border_radius
                }} onClick={toggleAuth}>{ isAuth ? 'Logged in' : 'Logged Out' }
            </button>*/}
            {/*<ul>
                <li style={{color: theme.color}}>Home</li>
                <li style={{color: theme.color}}>About</li>
                <li style={{color: theme.color}}>Contact</li>
            </ul>*/}
        </nav>
     );
}
 
export default NavBar;