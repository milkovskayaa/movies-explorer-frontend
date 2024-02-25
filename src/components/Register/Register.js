import React from 'react';
import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

function Register() {
  return(
    <section className='register'>
      <div className='register__container'>
      <Link to='/' className='register__logo'>
        <img src={logo} alt='логотип' className='register__link' />
       </Link>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <form className='form form_type_register'>
          <div className='form__input-box form__input-box_register'>
            <label className='form__label form__label_register'>Имя</label>
            <input
              type='text'
              className='form__input form__input_register' 
              name='username'
              placeholder='Виталий'
              minLength={2}
              maxLength={30}
              required
            />
            <span className='form__error'>Что-то пошло не так...</span>
          </div>
          <div className='form__input-box form__input-box_register'>
            <label className='form__label form__label_register'>E-mail</label>
            <input
              type='email'
              className='form__input form__input_register' 
              name='email'
              placeholder='pochta@yandex.ru'
              required
            />
            <span className='form__error'>Что-то пошло не так...</span>
          </div>
          <div className='form__input-box form__input-box_register'>
            <label className='form__label form__label_register'>Пароль</label>
            <input
              type='password'
              className='form__input form__input_register'
              name='password'
              placeholder='Введите пароль'
              required
            />
            <span className='form__error form__error_active'>Что-то пошло не так...</span>
          </div>
          <button type='button' className='form__button form__button_register'>
            Зарегистрироваться
          </button>
          <span className='form__subtitle form__subtitle_register'>
            Уже зарегистрированы?{" "}
            <Link to="/signin" className="form__link form__link_register">
              Войти
            </Link>
          </span>
        </form>
      </div>
    </section>
  )
}

export default Register;