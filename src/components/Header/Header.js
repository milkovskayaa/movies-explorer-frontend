import React from 'react';
import './Header.css';
import headerLogo from '../../images/logo.svg';
import { Link, useLocation } from "react-router-dom";
import Navigation from '../Navigation/Navigation';


function Header({loggedIn}) {

  const location = useLocation();
  return(
    <header className={`header ${location.pathname === '/' ? '' : 'header_logged'}`}>
      <Link to='/'>
         <img src={headerLogo} alt='Логотип' className='header__logo' />
      </Link>
      <Navigation loggedIn={loggedIn} />
    </header>
  )
}

export default Header;