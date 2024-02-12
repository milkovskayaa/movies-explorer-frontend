import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';

function Movies({loggedIn}) {
  return(
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      {/* <Preloader /> */}
    </>

  )
}

export default Movies;