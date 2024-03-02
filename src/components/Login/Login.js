import React from 'react';
import './Login.css';
import logo from '../../images/logo.svg';
import { Link, useNavigate } from "react-router-dom";
import * as MainApi from '../../utils/MainApi';
import { useFormWithValidation } from '../../utils/formValidator';

function Login({ handleLogin }) {

  const navigate = useNavigate();
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [formError, setFormError] = React.useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;

    MainApi.authorize(email, password)
      .then((data) => {
        if (data.token) {
          handleLogin();
          navigate('/movies', { replace: true })
        }
      })
      .catch((err) => {
        if (err.status === 400) {
          setFormError('Вы ввели неверный логин или пароль')
        }
      })
  }

  return(
    <section className='login register'>
      <div className='login__container register__container'>
        <Link to='/' className='login__logo register__logo'>
          <img src={logo} alt='логотип' className='login__link' />
        </Link>
        <h1 className='login__title register__title'>Рады видеть!</h1>
        <form className='form form_type_login' onSubmit={handleSubmit}>
          <div className='form__input-box form__input-box_login'>
            <label className='form__label form__label_login'>E-mail</label>
            <input
              onChange={handleChange}
              type='email'
              className='form__input form__input_login' 
              name='email'
              placeholder='pochta@yandex.ru'
              required
            />
            <span className='form__error'>{errors.email}</span>
          </div>
          <div className='form__input-box form__input-box_login'>
            <label className='form__label form__label_login'>Пароль</label>
            <input
              onChange={handleChange}
              type='password'
              className='form__input form__input_login'
              name='password'
              placeholder='Введите пароль'
              required
            />
            <span className='form__error'>{errors.password}</span>
          </div>
          <div className='form__submit form__submit_login'>
            <span className='form__submit-error'>{formError}</span>
            <button type='submit' className={`form__button form__button_login ${!isValid ? 'form__button_disabled' : ''}`}>
              Войти
            </button>
          </div>
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