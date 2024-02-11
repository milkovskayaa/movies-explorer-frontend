import React from 'react';
import './Footer.css';

function Footer() {
  return(
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__info'>
          <p className='footer__year'>&copy; 2024</p>
          <ul className='footer__links'>
            <li className='footer__links-item'>
              <a href='https://practicum.yandex.ru/' className='footer__link'>Яндекс.Практикум</a>
            </li>
            <li className='footer__links-item'>
              <a href='https://github.com/' className='footer__link'>Github</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;