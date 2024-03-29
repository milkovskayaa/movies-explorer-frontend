import React from 'react';
import './MoviesCard.css';
import { useLocation } from "react-router-dom";

function MoviesCard({movie, handleMovieLike, likedMovies, deleteMovie}) {
  const location = useLocation();
  const isLiked = likedMovies.some((e) => movie.id === e.movieId);

  // конвертация времени фильма
  function durationConvert(minutes) {
    return(`${Math.floor(minutes / 60)}ч ${minutes % 60}м`);
  }

  // лайк карточки
  const handleLike = () => {
    handleMovieLike(movie);
  }

  // удалить карточку
  const handleDelete = () => {
    deleteMovie(movie);
  }

  return(
    <div className='card'>
      <a href={movie.trailerLink} target='blank'>
        <img
          src={location.pathname === '/saved-movies'
           ? movie.image
           : `https://api.nomoreparties.co/${movie.image.url}`
          }
          alt={movie.nameRU}
          className='card__image'
        />
      </a>
      <div className='card__info'>
        <p className='card__name'>{movie.nameRU}</p>
        {location.pathname === '/movies' ? (
          // кнопка лайка
            <button
            type='button'
            onClick={handleLike}
            className={
              `card__button
              card__like-button 
              ${isLiked ? 'card__like-button_active' : ''}
              `
              }>
          </button>
        ) : (
          // кнопка удаления
          <button
            type='button'
            onClick={handleDelete}
            className= 'card__button card__delete-movie'
          >
          </button>
        )
        }
      </div>
      <p className='card__duration'>{durationConvert(movie.duration)}</p>
    </div>
  )
}

export default MoviesCard;