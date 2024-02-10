import React from 'react';

function PageNotFound() {
  return(
    <div className='page-not-found'>
      <h1 className='page-not-found__error'>404</h1>
      <p className='page-not-found__text'>Страница не найдена</p>
      <p className='page-not-found__back'>Назад</p>
    </div>
  )
}

export default PageNotFound;