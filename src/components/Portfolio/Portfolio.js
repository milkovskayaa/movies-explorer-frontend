import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return(
    <section className='portfolio'>
      <div className='portfolio__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__list'>
          <li className='portfolio__item'>
            <a className='portfolio__item-link' target='blank' href='https://github.com/milkovskayaa/how-to-learn'>
              Статичный сайт
              <button type='button' className='portfolio__item-button'></button>
            </a>
          </li>
          <li className='portfolio__item'>
            <a className='portfolio__item-link' target='blank' href='https://milkovskayaa.github.io/russian-travel/index.html'>
              Адаптивный сайт
              <button type='button' className='portfolio__item-button'></button>
            </a>
          </li>
          <li className='portfolio__item'>
            <a className='portfolio__item-link' target='blank' href='https://tmalceva.nomoredomainsmonster.ru'>
              Одностраничное приложение
              <button type='button' className='portfolio__item-button'></button>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Portfolio;