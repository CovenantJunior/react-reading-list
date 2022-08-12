import { createContext } from 'react';
import React, { Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        dark : {background: '#555',  font: '#ddd', bg: '#333', border_radius: '10px'},
        light : {background: '#ddd',  font: '#333', bg: '#eee', border_radius: '10px'}
    }
    toggleTheme = () =>{
        this.setState({ isLightTheme: !this.state.isLightTheme });
    }
    render() { 
        console.log(this.state.isLightTheme)
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;