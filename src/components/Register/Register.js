import React from 'react';
import './Navigation.css';
import logo from '../../images/logo.svg';

function Register() {
  return(
    <section className='register'>
      <img src={logo} alt='логотип' className='register__logo' />
      <h1 className='register__title'>Добро пожаловать!</h1>
      <form className='register__form'>
        <div className='register__input-box'>
          <label className='register__label'></label>
          <input type='text' className='register__input'>Имя</input>
        </div>
        <div className='register__input-box'>
          <label className='register__label'></label>
          <input type='email' className='register__input'>E-mail</input>
        </div>
        <div className='register__input-box'>
          <label className='register__label'></label>
          <input type='password' className='register__input'>Пароль</input>
        </div>
      </form>
    </section>
  )
}

export default Register;