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
import moviesApi from '../../utils/MoviesApi';

function App() {

  const isLogged = localStorage.getItem('token') ? true : false;
  const [loggedIn, setLoggedIn] = React.useState(isLogged);
  const [currentUser, setCurrentUser] = React.useState({});
  const [likedMovies, setLikedMovies] = React.useState([]);
  const [movies, setMovies] = React.useState([]);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  // получение данных пользователя
  React.useEffect(() => {
    if (loggedIn) {
      MainApi.getInfoProfile(localStorage.getItem('token'))
        .then((res) => {
          if(res) {
            setCurrentUser(res);
          }
        })
        .catch((err) => console.log(err))
    }
  }, [loggedIn])

  // загрузка всех фильмов с сервера
  React.useEffect(() => {
    if (loggedIn) {
      moviesApi.getMovies()
        .then((movies) => {
          setMovies(movies)
        })
        .catch((err) => console.log(err))
    }
  }, [loggedIn]);


  // сохранение карточки
 const handleMovieLike = (movieData) => {
  console.log(movieData)
    const isLiked = likedMovies.some((movie) => movieData._id === movie.id);
    console.log(isLiked)
    if (!isLiked) {
      return MainApi.postNewMovie(movieData, localStorage.getItem('token'))
        .then((newMovie) => {
          setLikedMovies([...likedMovies, newMovie])
        })
        .catch((err) => console.log(err));
    }
    else {
      const likedMovie = likedMovies.find((c) => c.id === movieData._id)
      return MainApi.deleteMovie(likedMovie._id, localStorage.getItem('token'))
        .then(() => {
          setLikedMovies((state) => state.filter((c) => c._id !== likedMovie._id))
        })
    }
  }

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
            element={<Register handleLogin={handleLogin} />}
          />
          <Route
            path='/signin'
            element={<Login handleLogin={handleLogin} />}
          />
          <Route 
            path='/movies'
            element={
              <Movies
              loggedIn={true}
              movies={movies} 
              handleMovieLike={handleMovieLike}
              likedMovies={likedMovies}
              />
            }
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
