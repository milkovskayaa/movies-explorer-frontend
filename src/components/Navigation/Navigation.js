import React from 'react';
import './Navigation.css';
import { useLocation } from "react-router-dom";

function Navigation({loggedIn}) {
  const location = useLocation();

  return(
    <section className='navigation'>
      <ul className={`navigation__list ${location.pathname === '/' ? '' : 'navigation__list_logged'}`}>
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
          <div type='button' className={`navigation__account-button ${location.pathname === '/' ? '' : 'navigation__account-button_dark'}` }>
            <p className='navigation__account-title'>Аккаунт</p>
            <div className={`navigation__account-icon ${location.pathname === '/' ? '' : 'navigation__account-icon_dark'}`}></div>
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