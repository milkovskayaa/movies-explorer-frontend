import { useCallback } from 'react';
import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/MoviesApi';

function Movies({loggedIn, handleMovieLike, likedMovies}) {

  const [movies, setMovies] = React.useState([]);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [isShowPreloader, setShowPreloader] = React.useState(false);
  // const [searchValue, setSearchValue] = React.useState('');
  const [isShortSwitch, setShortSwitch] = React.useState(false);
  const [searchError, setSearchError] = React.useState('');

  // функция поиска фильмов
  const findMovies= useCallback((movies, searchValue, isShortSwitch) => {
   setFoundMovies( movies.filter((movie) => {
      const filtredMovie = movie.nameEN.toLowerCase().includes(searchValue.toLowerCase()) ||
                          movie.nameRU.toLowerCase().includes(searchValue.toLowerCase());
      if (isShortSwitch) {
        return filtredMovie && movie.duration < 30;
      }
      else {
        return filtredMovie;
      }
    }))
  }, []);

  function handleSearchMovie(searchValue) {
    console.log(searchValue)
    setShowPreloader(true);
    // если фильмы еще не искали -> загружаем из api и делаем поиск
    // if (movies === 0) {
      moviesApi.getMovies()
        .then((movies) => {
          findMovies(movies, searchValue, isShortSwitch)
          setMovies(movies);
          setSearchError('');
        })
        .catch((err) => {
           console.log(err)
           setSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        })
        .finally(() => setShowPreloader(false));
    // }
  }

  return(
    <section className='movies'>
      <Header loggedIn={loggedIn} />
      <SearchForm 
        movies={movies}
        handleSearchMovie={handleSearchMovie}
        isShortSwitch={isShortSwitch} 
        setShortSwitch={setShortSwitch}
        findMovies={findMovies}
        searchError={searchError}
        setSearchError={setSearchError}
      />
      <Preloader isShowPreloader={isShowPreloader} />
      <MoviesCardList foundMovies={foundMovies} movies={movies} handleMovieLike={handleMovieLike} likedMovies={likedMovies} />
      <Footer />
    </section>
  )
}

export default Movies;