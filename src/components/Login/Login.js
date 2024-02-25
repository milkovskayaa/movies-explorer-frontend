import React from 'react';
import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";

function Login() {
  return(
    <section className='login register'>
      <div className='login__container register__container'>
        <Link to='/' className='login__logo register__logo'>
          <img src={logo} alt='логотип' className='login__link' />
        </Link>
        <h1 className='login__title register__title'>Рады видеть!</h1>
        <form className='form form_type_login'>
          <div className='form__input-box form__input-box_login'>
            <label className='form__label form__label_login'>E-mail</label>
            <input
              type='email'
              className='form__input form__input_login' 
              name='email'
              placeholder='pochta@yandex.ru'
              required
            />
            <span className='form__error'>Что-то пошло не так...</span>
          </div>
          <div className='form__input-box form__input-box_login'>
            <label className='form__label form__label_login'>Пароль</label>
            <input
              type='password'
              className='form__input form__input_login'
              name='password'
              placeholder='Введите пароль'
              required
            />
            <span className='form__error'>Что-то пошло не так...</span>
          </div>
          <button type='button' className='form__button form__button_login'>
            Войти
          </button>
          <span className='form__subtitle form__subtitle_login'>
            Еще не зарегистрированы?{" "}
            <Link to="/signup" className="form__link form__link_login">
              Регистрация
            </Link>
          </span>
        </form>
      </div>
    </section>
  )
}

export default Login;