import './App.css';
import './Quicksand.css';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import ThemeToggle from './components/ThemeToggle';
import BookContextProvider from './contexts/BookContext';
import BookForm from './components/BookForm';

function App() {

  return (
    <div className="App">
      <div className="content">
        <AuthContextProvider>
          <ThemeContextProvider>
            <BookContextProvider>
              <NavBar />
              <br />
              <BookList />
              <ThemeToggle />
              <BookForm />
            </BookContextProvider>
          </ThemeContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  );
}

export default App;
