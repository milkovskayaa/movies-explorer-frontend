import React, { useState } from 'react';
import './Navigation.css';
import { useLocation, Link } from "react-router-dom";
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Navigation({loggedIn}) {
  const location = useLocation();
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const openMenu = () => {
    setBurgerMenuOpen(true);
  };

  const closeMenu = () => {
    setBurgerMenuOpen(false)
  };

  return(
    <>
      {loggedIn ? (
        <>
          <section className='navigation navigation_logged'>
            <ul className='navigation__list navigation__list_logged'>
              <Link to='/movies' className='link'>
                <li className='navigation__link navigation__link_movies'>Фильмы</li>
              </Link>
              <Link to='/saved-movies' className='link'>
                <li className='navigation__link navigation__link_movies'>Сохраненные фильмы</li>
              </Link>
            </ul>
          </section>
        </>
        ) : (
        <>
          <section className='navigation'>
            <ul className='navigation__list'>
              <Link to='/signup' className='link'>
                <li className='navigation__link navigation__link_signup'>Регистрация</li>
              </Link>
            </ul>
          </section>
          </>
        ) 
        }
      {loggedIn ? (
        <>
          <Link to='/profile' className='link'>
            <div type='button' className={`navigation__account-button ${location.pathname === '/' ? '' : 'navigation__account-button_dark'}` }>
              <p className='navigation__account-title'>Аккаунт</p>
              <div className={`navigation__account-icon ${location.pathname === '/' ? '' : 'navigation__account-icon_dark'}`}></div>
            </div>
          </Link>
          <button type='button' className={`navigation__burger-button ${isBurgerMenuOpen ? 'navigation__burger-button_hide' : ''}`} onClick={openMenu} />
          <BurgerMenu isOpen={isBurgerMenuOpen} onClose={closeMenu} />
        </>
      ) : (
        <Link to='signin' className='link'>
          <button type='button' className='navigation__signin-button'>
            Войти
          </button>
        </Link>
      )}      
  </>
  )
}

export default Navigation;