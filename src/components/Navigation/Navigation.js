import React from 'react';
import './Navigation.css';
// import { Link, useLocation } from "react-router-dom";

function Navigation({loggedIn}) {

  return(
    <section className='navigation'>
      <ul className='navigation__list'>
        {loggedIn ? (
          <>
            <li className='navigation__link'>Фильмы</li>
            <li className='navigation__link'>Сохраненные фильмы</li>
          </>
        ) : (
          <li className='navigation__link navigation__link_signup'>Регистрация</li>
        ) 
        }
      </ul>
      {loggedIn ? (
        <>
          <div type='button' className='navigation__account-button'>
            <p className='navigation__account-title'>Аккаунт</p>
            <div className='navigation__account-icon'></div>
          </div>
        </>
      ) : (
        <button type='button' className='navigation__signin-button'>
          Войти
        </button>
      )}
      
    </section>
  )
}

export default Navigation;