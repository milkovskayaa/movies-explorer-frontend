import React from 'react';
import './PageNotFound.css';
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  function getBack() {
    navigate(-1);
  };

  return(
    <div className='page-not-found'>
      <div className='page-not-found__container'>   
        <h1 className='page-not-found__error'>404</h1>
        <p className='page-not-found__text'>Страница не найдена</p>
        <p className='page-not-found__back' onClick={getBack}>Назад</p>
      </div>
    </div>
  )
}

export default PageNotFound;