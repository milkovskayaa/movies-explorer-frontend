import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as MainApi from '../../utils/MainApi';

function App() {

  const isLogged = localStorage.getItem('jwt') ? true : false;
  const [loggedIn, setLoggedIn] = React.useState(isLogged);
  const [currentUser, setCurrentUser] = React.useState({});


  return (
    <div className='root'>
      <CurrentUserContext.Provider value={currentUser}>
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
            path='/profile'
            element={<Profile loggedIn={true} />}
          />
          <Route
            path='*'
            element={<PageNotFound />}
          />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
