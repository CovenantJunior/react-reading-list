import './App.css';
import './Quicksand.css';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import ThemeToggle from './components/ThemeToggle';

function App() {

  return (
    <div className="App">
      <div className="content">
        <AuthContextProvider>
          <ThemeContextProvider>
            <NavBar />
            <br />
            <BookList />
            <ThemeToggle />
          </ThemeContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
