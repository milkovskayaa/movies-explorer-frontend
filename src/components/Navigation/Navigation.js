import React from 'react';
import './Navigation.css';

function Navigation() {
  return(
    <section className='navigation'>
      <ul className='navigation__list'>
      <li className='navigation__link'>Фильмы</li>
      <li className='navigation__link'>Сохраненные фильмы</li>
    </ul>
    <div className='navigation__account-button'>
        <p className='navigation__account-title'>Аккаунт</p>
        <div className='navigation__account-icon'></div>
      </div>
    </section>
  )
}

export default Navigation;