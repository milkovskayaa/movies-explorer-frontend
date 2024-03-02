import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, handleMovieLike, likedMovies }) {
  return(
    <section className='movies__container'>
      {movies.map(item => (
        <MoviesCard
          key={item.id}
          movie={item}
          handleMovieLike={handleMovieLike}
          likedMovies={likedMovies}
        />
      ))}    
    </section>
  )
}

export default MoviesCardList;