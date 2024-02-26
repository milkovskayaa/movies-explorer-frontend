import React from 'react';
import './MoviesCard.css';
import MovieImage from '../../images/card-img.png';
import { useLocation } from "react-router-dom";

function MoviesCard({name}) {
  const location = useLocation();

  return(
    <div className='card'>
      <img src={MovieImage} alt={name} className='card__image'/>
      <div className='card__info'>
        <p className='card__name'>33 слова о дизайне</p>
        <button type='button' className={`card__button ${location.pathname === '/movies' ? 'card__like-button' : 'card__delete-movie'} `}></button>
      </div>
      <p className='card__duration'>1ч 47м</p>
    </div>
  )
}

export default MoviesCard;