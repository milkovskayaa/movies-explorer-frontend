import { useCallback } from 'react';
import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import moviesApi from '../../utils/MoviesApi';

function Movies({
  loggedIn,
  handleMovieLike,
  likedMovies,
  isShowPreloader,
  setShowPreloader,
  foundMovies,
  setFoundMovies,
  deleteMovie,
  searchError,
  setSearchError
}) {

  const [movies, setMovies] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [isShortSwitch, setShortSwitch] = React.useState(false);
  const [isFirstSearch, setIsFirstSearch] = React.useState(true);

  // если поиск не первый, загружаем из LocalStorage данные поиска 
  React.useEffect(() => {
    if (localStorage.getItem('movies')) {
      setMovies(JSON.parse(localStorage.movies));
      setSearchValue(JSON.parse(localStorage.searchValue));
      setShortSwitch(JSON.parse(localStorage.stateCheckbox));
      setFoundMovies(JSON.parse(localStorage.foundMovies));
    }
  }, [setFoundMovies])

  console.log(localStorage)

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

    setSearchValue(searchValue);

    // записываем в LocalStorage текст запроса, состояние переключателя и найденные фильмы
    localStorage.setItem('searchValue', JSON.stringify(searchValue));
    localStorage.setItem('stateCheckbox', JSON.stringify(isShortSwitch));
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [setFoundMovies]);

  React.useEffect(() => {
    localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
  })

  function handleSearchMovie(searchValue) {
    if (movies.length !== 0) {
      findMovies(movies, searchValue, isShortSwitch);
    }
    else {
      setShowPreloader(true);
      moviesApi.getMovies()
        .then((movies) => {
          findMovies(movies, searchValue, isShortSwitch)
          setMovies(movies);
          setIsFirstSearch(false);
          setSearchError('');
        })
        .catch((err) => {
           console.log(err)
           setSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        })
        .finally(() => setShowPreloader(false));
    }
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
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Preloader isShowPreloader={isShowPreloader} />
      <MoviesCardList 
        foundMovies={foundMovies}
        setFoundMovies={setFoundMovies}
        handleMovieLike={handleMovieLike}
        likedMovies={likedMovies}
        deleteMovie={deleteMovie}
        isFirstSearch={isFirstSearch}
      />
      <Footer />
    </section>
  )
}

export default Movies;