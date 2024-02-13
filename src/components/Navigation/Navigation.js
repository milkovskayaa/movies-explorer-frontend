import React from 'react';
import './Navigation.css';
import { useLocation, Link } from "react-router-dom";

function Navigation({loggedIn}) {
  const location = useLocation();

  return(
    <section className='navigation'>
      <ul className={`navigation__list ${location.pathname === '/' ? '' : 'navigation__list_logged'}`}>
        {loggedIn ? (
          <>
            <Link to='/movies' className='link'>
              <li className='navigation__link'>Фильмы</li>
            </Link>
            <Link to='/saved-movies' className='link'>
              <li className='navigation__link'>Сохраненные фильмы</li>
            </Link>
          </>
        ) : (
          <Link to='/signup' className='link'>
            <li className='navigation__link navigation__link_signup'>Регистрация</li>
          </Link>
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
        <Link to='signin' className='link'>
          <button type='button' className='navigation__signin-button'>
            Войти
          </button>
        </Link>
        
      )}
      
    </section>
  )
}

export default Navigation;