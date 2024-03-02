import React from 'react';
import './MoviesCard.css';
import { useLocation } from "react-router-dom";

function MoviesCard({movie, handleMovieLike, likedMovies}) {
  const location = useLocation();
  const [isLiked, setIsLiked] = React.useState(false);

  // проверка лайка
  React.useEffect(() => {
    setIsLiked(likedMovies.some((e) => movie.id === e.movieId));
  }, [movie, likedMovies])

  // конвертация времени фильма
  function durationConvert(minutes) {
    return(`${Math.floor(minutes / 60)}ч ${minutes % 60}м`);
  }

  // лайк карточки
  const handleLike = () => {
    handleMovieLike(movie)
  }

  return(
    <div className='card'>
      <a href={movie.trailerLink} target='blank'>
        <img src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} className='card__image'/>
      </a>
      <div className='card__info'>
        <p className='card__name'>{movie.nameRU}</p>
        <button
          type='button'
          onClick={handleLike}
          className={`card__button
            ${location.pathname === '/movies' ? 'card__like-button' : 'card__delete-movie'} 
            ${isLiked ? 'card__like-button_active' : ''}
            `}>
        </button>
      </div>
      <p className='card__duration'>{durationConvert(movie.duration)}</p>
    </div>
  )
}

export default MoviesCard;