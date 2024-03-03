import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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
  const [errorInfo, setErrorInfo] = React.useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoggedIn(true);
  };

  // функция выхода из системы
  const signOut = () => {
    localStorage.removeItem('token');
    setCurrentUser('');
    navigate('/', { replace: true });
    setLoggedIn(false);
  };

  // получение данных пользователя
  React.useEffect(() => {
    if (loggedIn) {
      MainApi.getInfoProfile(localStorage.getItem('token'))
        .then((res) => {
          if(res) {
            console.log(res)
            setCurrentUser(res);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn])

  // загрузка всех фильмов с сервера
  React.useEffect(() => {
    if (loggedIn) {
      moviesApi.getMovies()
        .then((movies) => {
          setMovies(movies)
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  // обновление инфо о пользователе
  const updateUserInfo = (data) => {
    console.log(data)
    MainApi.updateProfile(data.name, data.email, localStorage.getItem('token'))
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        if (err.status === 409) {
          setErrorInfo('Пользователь с таким email уже существует')
        }
        console.log(err);
        setErrorInfo('При обновлении профиля произошла ошибка')
      });
  }

  // сохранение карточки
 const handleMovieLike = (movieData) => {
  console.log(movieData)
    const isLiked = likedMovies.some((movie) => movieData.id === movie.movieId);
    console.log(isLiked)
    if (!isLiked) {
      MainApi.postNewMovie(movieData, localStorage.getItem('token'))
        .then((newMovie) => {
          setLikedMovies([...likedMovies, newMovie])
        })
        .catch((err) => console.log(err));
    }
    else {
      const likedMovie = likedMovies.find((movie) => movie.movieId === movieData.id)
      console.log(likedMovie)
      MainApi.deleteMovie(likedMovie._id, localStorage.getItem('token'))
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
              loggedIn={loggedIn}
              movies={movies} 
              handleMovieLike={handleMovieLike}
              likedMovies={likedMovies}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={<SavedMovies loggedIn={loggedIn}/>}
          />
          <Route
            path='/profile'
            element={
              <Profile
              loggedIn={loggedIn}
              currentUser={currentUser} 
              signOut={signOut}
              updateUserInfo={updateUserInfo}
              errorInfo={errorInfo}
              />
            }
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
