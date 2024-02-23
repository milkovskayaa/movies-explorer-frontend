import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from "react-router-dom";

function Profile({loggedIn}) {
  const [isEditButtonActive, setEditButtonActive] = React.useState(false);
  const [editButtonValue, setEditButonValue] = React.useState('Редактировать');

  const handleEdit = () => {
    setEditButtonActive(true);    
    setEditButonValue('Сохранить');
  }

  return(
    <>
      <Header loggedIn={loggedIn} />
      <section className='profile'>
        <div className='profile__container'>
          <h1 className='profile__title'>Привет, Виталий!</h1>
          <div className='profile__input-box profile__input-box_name'>
            <label className='profile__label'>Имя</label>
            <input
            type='text'
            className='profile__input'
            placeholder='Виталий'
            name='profile-name'
            minLength={2}
            maxLength={30}
            required
            />
          </div>
          <div className='profile__input-box profile__input-box_email'>
            <label className='profile__label'>E-mail</label>
            <input
            type='email'
            className='profile__input'
            placeholder='pochta@yandex.ru'
            name='profile-email'
            required
            />
          </div>
          <button
            type='button'
            className={`profile-btn profile-btn_edit ${isEditButtonActive ? 'profile-btn_edit_active' : ''}`}
            onClick={handleEdit}>
            {editButtonValue}
          </button>
          <Link to='/' className='link profile__link'>
            <button
              type='button'
              className={`profile-btn profile-btn_exit ${isEditButtonActive ? 'profile-btn_exit_hide' : ''}`}>
              Выйти из аккаунта
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Profile;