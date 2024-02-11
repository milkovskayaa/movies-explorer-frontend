import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';

function Movies({loggedIn}) {
  return(
    <>
      <Header loggedIn={loggedIn} />
      <Preloader />
    </>

  )
}

export default Movies;