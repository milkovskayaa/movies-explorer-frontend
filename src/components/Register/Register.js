import React from 'react';
import './Register.css';
import logo from '../../images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import * as MainApi from '../../utils/MainApi';
import { useFormWithValidation } from '../../utils/formValidator';

function Register({ handleLogin }) {

  const navigate = useNavigate();
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const [formError, setFormError] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;

    MainApi.register(name, email, password)
      .then((res) => {
        if (res) {
          console.log(res)
          MainApi.authorize(email, password)
          .then((data) => {
            if (data.token) {
              handleLogin();
              navigate('/movies', { replace: true })
            }
          })
          .catch((err) => console.log(err))
        }
      })
      .catch((err) => {
        if (err.status === 409) {
          setFormError('Пользователь с таким email уже существует')
        }
        setFormError('При регистрации пользователя произошла ошибка')
      })
  }

  return(
    <section className='register'>
      <div className='register__container'>
      <Link to='/' className='register__logo'>
        <img src={logo} alt='логотип' className='register__link' />
       </Link>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <form className='form form_type_register' onSubmit={handleSubmit}>
          <div className='form__input-box form__input-box_register'>
            <label className='form__label form__label_register'>Имя</label>
            <input
              onChange={handleChange}
              type='text'
              className='form__input form__input_register' 
              name='name'
              placeholder='Виталий'
              minLength={2}
              maxLength={30}
              required
            />
            <span className='form__error'>{errors.name}</span>
          </div>
          <div className='form__input-box form__input-box_register'>
            <label className='form__label form__label_register'>E-mail</label>
            <input
              onChange={handleChange}
              type='email'
              className='form__input form__input_register' 
              name='email'
              placeholder='pochta@yandex.ru'
              required
            />
            <span className='form__error'>{errors.email}</span>
          </div>
          <div className='form__input-box form__input-box_register'>
            <label className='form__label form__label_register'>Пароль</label>
            <input
              onChange={handleChange}
              type='password'
              className='form__input form__input_register'
              name='password'
              placeholder='Введите пароль'
              required
            />
            <span className='form__error'>{errors.password}</span>
          </div>
          <div className='form__submit form__submit_register'>
            <span className='form__submit-error'>{formError}</span>
            <button
              type='submit'
              disabled={!isValid}
              className={`form__button form__button_register ${!isValid ? 'form__button_disabled' : ''}`}>
            Зарегистрироваться
            </button>
          </div>
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