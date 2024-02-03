import React from 'react';
import headerLogo from '../../images/logo.svg';

function Header({ loggedIn }) {
  return(
    <header className='header'>
      <img src={headerLogo} alt='Логотип' className='header__logo' />
      <ul className='header__navigation'>
        {/* {loggedIn ? ( */}
          <li className='header__link'>Фильмы</li>
          <li className='header__link'>Сохраненные фильмы</li>
        {/* ) : (
          ''
        )} */}
      </ul>
      <div className='header__account-button'>
        <p className='header__link header__account-title'>Аккаунт</p>
        <div className='header__account-icon'></div>
      </div>
    </header>
  )
}

export default Header;