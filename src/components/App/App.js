import React from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {

  const isLogged = localStorage.getItem('token') ? true : false;
  const [loggedIn, setLoggedIn] = React.useState(isLogged);
  const [currentUser, setCurrentUser] = React.useState({});
  const [likedMovies, setLikedMovies] = React.useState([]);
  const [isShowPreloader, setShowPreloader] = React.useState(false);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [searchError, setSearchError] = React.useState('');
  const [editError, setEditError] = React.useState('');
  const [editSuccess, setEditSuccess] = React.useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoggedIn(true);
  };

  React.useEffect(() => {
    checkToken();
  }, [loggedIn]);

  // проверка токена
  const checkToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      MainApi.getContent(token)
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            setLoggedIn(true);
          }
        })
        .catch((err) => console.log(err))
    }
  }

  console.log(localStorage)

  const clearLocalStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('foundMovies');
    localStorage.removeItem('likedMovies');
    localStorage.removeItem('movies');
    localStorage.removeItem('searchValue');
    localStorage.removeItem('searchValueSaved');
    localStorage.removeItem('stateCheckbox');
    localStorage.removeItem('stateCheckboxSaved');
    setFoundMovies([]);
  }

  // функция выхода из системы
  const signOut = () => {
    clearLocalStorage();
    setCurrentUser('');
    navigate('/', { replace: true });
    setLoggedIn(false);
  };

  // получение данных пользователя
  React.useEffect(() => {
    const token = localStorage.getItem('token')
    if (loggedIn) {
      Promise.all([MainApi.getInfoProfile(token), MainApi.getSavedMovies(token)])
        .then(([userInfo, movies]) => {
          setCurrentUser(userInfo);
          setLikedMovies(movies);
          localStorage.setItem('likedMovies', JSON.stringify(movies));
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn])

  // обновление инфо о пользователе
  const updateUserInfo = (data) => {
    console.log(data)
    MainApi.updateProfile(data.name, data.email, localStorage.getItem('token'))
      .then((res) => {
        setCurrentUser(res);
        setEditError('');
        setEditSuccess('Данные профиля успешно обновлены')
      })
      .catch((err) => {
        setEditSuccess('');
        if (err.status === 409) {
          setEditError('Пользователь с таким email уже существует')
        }
        console.log(err);
        setEditError('При обновлении профиля произошла ошибка')
      });
  }

  // сохранение карточки
 const handleMovieLike = (movieData) => {
    const isLiked = likedMovies.some((movie) => movieData.id === movie.movieId);
    if (!isLiked) {
      MainApi.postNewMovie(movieData, localStorage.getItem('token'))
        .then((newMovie) => {
          setLikedMovies([...likedMovies, newMovie])
          console.log(likedMovies)
        })
        .catch((err) => console.log(err));
    }
    else {
      const likedMovie = likedMovies.find((movie) => movie.movieId === movieData.id)
      deleteMovie(likedMovie)
    }
  }

  console.log(likedMovies)

  // удаление карточки
  const deleteMovie = (movie) => {
    console.log(movie)
    MainApi.deleteMovie(movie._id, localStorage.getItem('token'))
      .then(() => {
        setLikedMovies((state) => state.filter((c) => c._id !== movie._id))
        console.log(likedMovies)
      })
      .catch((err) => console.log(err));
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
            element={
              loggedIn ? <Navigate to="/" replace /> :
              <Register handleLogin={handleLogin} />
          }
          />
          <Route
            path='/signin'
            element={
              loggedIn ? <Navigate to="/" replace /> :
              <Login handleLogin={handleLogin} />
          }
          />
          <Route 
            path='/movies'
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                handleMovieLike={handleMovieLike}
                likedMovies={likedMovies}
                isShowPreloader={isShowPreloader}
                setShowPreloader={setShowPreloader}
                foundMovies={foundMovies}
                setFoundMovies={setFoundMovies}
                deleteMovie={deleteMovie}
                searchError={searchError}
                setSearchError={setSearchError}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute 
                element={SavedMovies}
                loggedIn={loggedIn}
                likedMovies={likedMovies}
                setLikedMovies={setLikedMovies}
                deleteMovie={deleteMovie}
                isShowPreloader={isShowPreloader}
                searchError={searchError}
                setSearchError={setSearchError}
              />
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute 
                element={Profile}
                loggedIn={loggedIn}
                currentUser={currentUser} 
                signOut={signOut}
                updateUserInfo={updateUserInfo}
                editError={editError}
                editSuccess={editSuccess}
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
