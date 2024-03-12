import { useCallback } from 'react';
import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function SavedMovies({
  loggedIn, 
  likedMovies,
  setLikedMovies,
  deleteMovie,
  isShowPreloader,
  searchError,
  setSearchError
}) {

  const [searchSavedValue, setSearchSavedValue] = React.useState('');
  const [isShortSwitchSaved, setShortSwitchSaved] = React.useState(false);
  const [savedSearchMovies, setSavedSearchMovies] = React.useState(likedMovies);

  React.useEffect(() => {
    if (searchSavedValue === undefined) {
      setSearchError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
    }
  })

  // функция поиска фильмов
  const findMovies = useCallback((movies, searchValue, isShortSwitch) => {
    setSavedSearchMovies(movies.filter((movie) => {
       const filtredMovie = movie.nameEN.toLowerCase().includes(searchValue.toLowerCase()) ||
                           movie.nameRU.toLowerCase().includes(searchValue.toLowerCase());
       if (isShortSwitch) {
         return filtredMovie && movie.duration < 30;
       }
       else {
         return filtredMovie;
       }
     }))

     setSearchSavedValue(searchValue);

   }, []);

   const handleSearchSavedMovie = (searchSavedValue) => {
    findMovies(likedMovies, searchSavedValue, isShortSwitchSaved);
   }

   React.useEffect(() => {
    findMovies(likedMovies, searchSavedValue, isShortSwitchSaved);
  }, [findMovies, likedMovies, searchSavedValue, isShortSwitchSaved])

  return(
    <>
      <Header loggedIn={loggedIn} />
      <section className='movies'>
        <SearchForm
          movies={likedMovies}
          handleSearchMovie={handleSearchSavedMovie}
          isShortSwitch={isShortSwitchSaved}
          setShortSwitch={setShortSwitchSaved}
          findMovies={findMovies}
          searchError={searchError}
          setSearchError={setSearchError}
          searchValue={searchSavedValue}
          setSearchValue={setSearchSavedValue}
        />
        <MoviesCardList
          foundMovies={savedSearchMovies}
          likedMovies={likedMovies}
          deleteMovie={deleteMovie} />
        <Preloader isShowPreloader={isShowPreloader} />
      </section>
      <Footer />
    </>
  )
}

export default SavedMovies;