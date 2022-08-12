import React, { Component } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

class NavBar extends Component {
    //Method 1
    /*static contextType = ThemeContext;
    state = {  } 
    render() { 
        console.log(this.context);
        const { isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <nav style={{
                color : theme.font,
                background : theme.background,
                borderRadius: theme.border_radius
            }}>
                <h1>Context App</h1>
                <ul>
                    <li style={{color: theme.color}}>Home</li>
                    <li style={{color: theme.color}}>About</li>
                    <li style={{color: theme.color}}>Contact</li>
                </ul>
            </nav>
        );
    }*/

    //method 2
    render() { 
        return(
            <AuthContext.Consumer>{(authContext) =>(
                <ThemeContext.Consumer>{(themeContext) =>{
                    const { isAuth, toggleAuth } = authContext;
                    const { isLightTheme, light, dark} = themeContext;
                    const theme = isLightTheme ? light : dark;
                    return (
                        <nav style={{
                            color : theme.font,
                            background : theme.background,
                            borderRadius: theme.border_radius
                        }}>
                            <h1>Context App</h1>
                            {<button onClick={toggleAuth}>{ isAuth ? 'Logged in' : 'Logged Out' }</button>}
                            <ul>
                                <li style={{color: theme.color}}>Home</li>
                                <li style={{color: theme.color}}>About</li>
                                <li style={{color: theme.color}}>Contact</li>
                            </ul>
                        </nav>
                    );
                }}
                </ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>
        )
    }
}
 
export default NavBar;