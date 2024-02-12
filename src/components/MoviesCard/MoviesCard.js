import React from 'react';
import './MoviesCard.css';
import MovieImage from '../../images/card-img.png';

function MoviesCard({name}) {
  return(
    <div className='card'>
      <img src={MovieImage} alt={name} className='card__image'/>
      <div className='card__info'>
        <p className='card__name'>33 слова о дизайне</p>
        <button type='button' className='card__like-button'></button>
      </div>
      <p className='card__duration'>1ч 47м</p>
    </div>
  )
}

export default MoviesCard;