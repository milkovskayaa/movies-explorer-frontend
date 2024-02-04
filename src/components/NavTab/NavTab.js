import React from 'react';

function NavTab() {
  return(
    <nav className='navtab'>
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
    </nav>
  )
}

export default NavTab;