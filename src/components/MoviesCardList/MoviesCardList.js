import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
// import { useLocation } from "react-router-dom";

function MoviesCardList({ foundMovies, movies, handleMovieLike, likedMovies }) {
  // const location = useLocation;
  const [notFoundText, setNotFoundText] = React.useState('');
  const [isButtonVisible, setButtonVisible] = React.useState(true);

  React.useEffect(() => {
    if (foundMovies.length === 0) {
      setNotFoundText('Ничего не найдено');
      setButtonVisible(false);
    }
  }, [foundMovies]);

  return(
    <>
      {foundMovies.length !==0 ? (
        <section className='movies__container'>
          {foundMovies.map(item => (
            <MoviesCard
              key={item.id}
              movie={item}
              handleMovieLike={handleMovieLike}
              likedMovies={likedMovies}
            />
          ))}
          <button className={`movies__button-more ${isButtonVisible ? '' : 'movies__button-more_hide'}`}>Ещё</button>
        </section>   
        )
        : (
        <p className='movies__not-found'>{notFoundText}</p>
        )
      }
    </>  
  )
}

export default MoviesCardList;