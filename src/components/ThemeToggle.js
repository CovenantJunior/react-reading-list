import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
    state = {  }
    static contextType = ThemeContext;
    
    render() {
        console.log(this.context);
        const { isLightTheme, light, dark, toggleTheme } = this.context; 
        const theme = isLightTheme ? light : dark;
        return (
            <button onClick={toggleTheme} style={{
                color : theme.font,
                background : theme.background,
                borderRadius: theme.border_radius
            }}>Toggle Theme</button>
        );
    }
}
 
export default ThemeToggle;