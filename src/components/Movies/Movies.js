import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function Movies({loggedIn, movies, handleMovieLike, likedMovies}) {

  return(
    <section className='movies'>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList movies={movies} handleMovieLike={handleMovieLike} likedMovies={likedMovies} />
      <button className='movies__button-more'>Ещё</button>
      {/* <Preloader /> */}
      <Footer />
    </section>
  )
}

export default Movies;