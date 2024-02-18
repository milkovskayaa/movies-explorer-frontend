import React from 'react';
import './BurgerMenu.css';
import { Link } from "react-router-dom";

function BurgerMenu({isOpen, onClose}) {
  return( 
    <>
      {isOpen ? (
        <section className='burger-menu'>
          <div className='burger-menu__container'>
            <button className='burger-menu__close' onClick={onClose} />
            <ul className='burger-menu__list'>
              <Link to='/' className='link'>
                <li className='burger-menu__link'>Главная</li>
              </Link>
              <Link to='/movies' className='link'>
                <li className='burger-menu__link'>Фильмы</li>
              </Link>
              <Link to='/saved-movies' className='link'>
                <li className='burger-menu__link'>Сохраненные фильмы</li>
              </Link>
            </ul>
            <Link to='/profile' className='link burger-menu__account-link'>
              <div type='button' className='navigation__account-button navigation__account-button_dark burger-menu__account'>
                <p className='navigation__account-title'>Аккаунт</p>
                <div className='navigation__account-icon navigation__account-icon_dark'></div>
              </div>
            </Link>
          </div>
        </section>
      ) : (
        ''
      )}
    </>
   )
}   

export default BurgerMenu;