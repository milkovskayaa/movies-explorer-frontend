import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {

  const isLogged = localStorage.getItem('jwt') ? true : false;
  const [loggedIn, setLoggedIn] = React.useState(isLogged);

  return (
    <div className='root'>
      <Routes>
        <Route
          path='/'
          element={<Main loggedIn={loggedIn} />}
        />
        <Route
          path='/signup'
          element={<Register />}
        />
        <Route
          path='/signin'
          element={<Login />}
        />
        <Route 
          path='/movies'
          element={<Movies loggedIn={true} />}
        />
        <Route
          path='/saved-movies'
          element={<SavedMovies loggedIn={true}/>}
        />
        <Route
          path='*'
          element={<PageNotFound />}
        />
      </Routes>
    </div>
  );
}

export default App;
