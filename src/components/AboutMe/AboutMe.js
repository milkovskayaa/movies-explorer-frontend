import React from 'react';
import './AboutMe.css';
import studentPhoto from '../../images/student-photo.png';

function AboutMe() {
  return(
    <section className='about-me'>
      <div className='about-me__container landing-container'>
        <h2 id='student-title' className='about-me__title landing-title'>Студент</h2>
        <div className='about-me__info'>
          <div className='about-me__description'>
            <p className='about-me__name'>Виталий</p>
            <p className='about-me__job'>Фронтенд-разработчик, 30 лет</p>
            <p className='about-me__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ.
               У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
                 заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a href='https://github.com/milkovskayaa' target='blank' className='about-me__link'>Github</a>
          </div>
          <img src={studentPhoto} alt='фото студента' className='about-me__img'/>
        </div>
        
      </div>
    </section>
  )
}

export default AboutMe;