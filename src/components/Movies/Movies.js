import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';

function Movies({loggedIn}) {
  return(
    <section className='movies'>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList />
      <button className='movies__button-more'>Ещё</button>
      {/* <Preloader /> */}
      <Footer />
    </section>
  )
}

export default Movies;