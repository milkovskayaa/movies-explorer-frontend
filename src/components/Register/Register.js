import React from 'react';
import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

function Register() {
  return(
    <section className='register'>
      <div className='register__container'>
        <img src={logo} alt='логотип' className='register__logo' />
        <h1 className='register__title'>Добро пожаловать!</h1>
        <form className='register__form'>
          <div className='register__input-box'>
            <label className='register__label'>Имя</label>
            <input
              type='text'
              className='register__input' 
              name='username'
              placeholder='Виталий'
              minLength={2}
              maxLength={30}
              required
            />
          </div>
          <div className='register__input-box'>
            <label className='register__label'>E-mail</label>
            <input
              type='email'
              className='register__input' 
              name='email'
              placeholder='pochta@yandex.ru'
              required
            />
          </div>
          <div className='register__input-box'>
            <label className='register__label'>Пароль</label>
            <input
              type='password'
              className='register__input'
              name='password'
              placeholder='Введите пароль'
            />
          </div>
          <button type='button' className='register__button'>
            Зарегистрироваться
          </button>
        </form>
        <span className='register__subtitle'>
          Уже зарегистрированы?{" "}
          <Link to="/signin" className="register__link">
            Войти
          </Link>
        </span>
      </div>
    </section>
  )
}

export default Register;