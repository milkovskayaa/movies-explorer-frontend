import React from 'react';
import './NavTab.css';

function NavTab() {
  return(
    <nav className='navtab'>
      <div className='navtab__container'>
        <ul className='navtab__list'>
          <a className='navtab__link' href='#project-title'>
            <li className='navtab__link_item'>О проекте</li>
          </a>
          <a className='navtab__link' href='#techs-title'>
            <li className='navtab__link_item'>Технологии</li>
          </a>
          <a className='navtab__link' href='#student-title'>
            <li className='navtab__link_item'>Студент</li>
          </a>
        </ul>
      </div>
    </nav>
  )
}

export default NavTab;