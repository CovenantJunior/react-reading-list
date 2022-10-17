import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


const ThemeToggle = () => {
    const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <button onClick={toggleTheme} style={{
            color : theme.font,
            background : theme.background,
            borderRadius: theme.border_radius
        }}>Toggle Theme</button>
     );
}

export default ThemeToggle;