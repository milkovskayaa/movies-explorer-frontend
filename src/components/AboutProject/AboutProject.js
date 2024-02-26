import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return(
    <section className='project'>
      <div className='project__container landing-container'>
        <h2 id='project-title' className='project__title landing-title'>О проекте</h2>
        <div className='project__stages'>
          <div className='project__stages-column'>
            <p className='project__stages-title'>Дипломный проект включал 5 этапов</p>
            <p className='project__stages-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className='project__stages-column'>
            <p className='project__stages-title'>На выполнение диплома ушло 5 недель</p>
            <p className='project__stages-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className='project__timelines'>
          <div className='project__timelines-column'>
            <div className='project__timeline project__timeline_backend'>
              <p className='project__timeline-text project__timeline-text_backend'>1 неделя</p>
            </div>
            <p className='project__timelines-text'>Back-end</p>
          </div>
          <div className='project__timelines-column'>
            <div className='project__timeline project__timeline_frontend'>
              <p className='project__timeline-text project__timeline-text_frontend'>4 недели</p>
            </div>
            <p className='project__timelines-text'>Front-end</p>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default AboutProject;