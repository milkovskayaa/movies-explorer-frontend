import React from 'react';
import './Techs.css';

function Techs() {
  return(
    <section className='techs'>
      <div className='techs__container landing-container'>
        <h2 id='techs-title' className='techs-title landing-title'>Технологии</h2>
        <div className='techs__info'>
          <p className='techs__info-title'>7 технологий</p>
          <p className='techs__info-subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className='techs__info-list'>
            <li className='techs__info-item'>
              <p className='techs__info-text'>HTML</p>
            </li>
            <li className='techs__info-item'>
              <p className='techs__info-text'>CSS</p>
            </li>
            <li className='techs__info-item'>
              <p className='techs__info-text'>JS</p>
            </li>
            <li className='techs__info-item'>
              <p className='techs__info-text'>React</p>
            </li>
            <li className='techs__info-item'>
              <p className='techs__info-text'>Git</p>
            </li>
            <li className='techs__info-item'>
              <p className='techs__info-text'>Express.js</p>
            </li>
            <li className='techs__info-item'>
              <p className='techs__info-text'>mongoDB</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Techs;