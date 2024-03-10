import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
// import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function SavedMovies({
  loggedIn, 
  likedMovies,
  deleteMovie,
  isShowPreloader
}) {

  return(
    <>
      <Header loggedIn={loggedIn} />
      <section className='movies'>
        {/* <SearchForm /> */}
        <MoviesCardList
          foundMovies={likedMovies}
          likedMovies={likedMovies}
          deleteMovie={deleteMovie} />
        <Preloader isShowPreloader={isShowPreloader} />
      </section>
      <Footer />
    </>
  )
}

export default SavedMovies;