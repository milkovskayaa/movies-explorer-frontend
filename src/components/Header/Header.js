import React from 'react';
import './Header.css';
import headerLogo from '../../images/logo.svg';
import { Link, useLocation } from "react-router-dom";
import Navigation from '../Navigation/Navigation';


function Header({loggedIn}) {

  const location = useLocation();
  return(
    <header className={`header ${location.pathname === '/' ? '' : 'header_logged'}`}>
      <div className='header__container'>
        <Link to='/' className='header__logo'>
         <img src={headerLogo} alt='Логотип' className='header__link' />
        </Link>
        <Navigation loggedIn={loggedIn} />
      </div>
    </header>
  )
}

export default Header;