import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/formValidator';

function Profile({loggedIn, currentUser, signOut, updateUserInfo, errorInfo}) {

  const [isEditButtonActive, setEditButtonActive] = React.useState(false);
  const [isEditForm, setEditForm] = React.useState(false);
  const { values, setValues, handleChange, errors, isValid, setIsValid } = useFormWithValidation();

  React.useEffect(() => {
    if (currentUser) {
      setValues({
      name: currentUser.name,
      email: currentUser.email
    })
    }
    
  }, [currentUser, setValues])

  React.useEffect(() => {
    if (
      currentUser.name === values.name &&
      currentUser.email === values.email
  ) {
      setIsValid(false);
  }
  }, [currentUser, setIsValid, values])

  // изменения формы при редактировании
  const handleEdit = () => {
    setEditForm(true);
    setEditButtonActive(true);
    console.log(isValid)
  }

  // редактирование профиля
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserInfo({
      name: values.name,
      email: values.email
    })
  }

  return(
    <>
      <Header loggedIn={loggedIn} />
      <section className='profile'>
        <div className='profile__container'>
          <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
          {isEditForm ? (
            // если данные редактируются
            <form className='profile__form' onSubmit={handleSubmit}>
              <div className='profile__form-container'>
                <div className='profile__input-box profile__input-box_name'>
                  <label className='profile__label'>Имя</label>
                  <input
                    onChange={handleChange}
                    defaultValue={values.name || ''}
                    type='text'
                    className='profile__input'
                    placeholder={currentUser.name}
                    name='name'
                    minLength={2}
                    maxLength={30}
                    required
                  />
                </div>
                <span className='form__error'>{errors.name}</span>
                <div className='profile__input-box profile__input-box_email'>
                  <label className='profile__label'>E-mail</label>
                  <input
                    onChange={handleChange}
                    defaultValue={values.email || ''}
                    type='email'
                    className='profile__input'
                    placeholder={currentUser.email}
                    name='email'
                    required
                  />
                </div>
                <span className='form__error profile__error_email'>{errors.email}</span>
              </div>
              <span className='form__submit-error'>{errorInfo}</span>
              <button
                type='submit'
                className={`profile-btn profile-btn_edit profile-btn_edit_active ${!isValid ? 'profile-btn_disabled' : ''}`}>
                Сохранить
              </button>
            </form>
          ) : (
            // не редактируются
            <>
            <div className='profile__input-box profile__input-box_name'>
              <label className='profile__label'>Имя</label>
              <p className='profile__userinfo'>{currentUser.name}</p>
            </div>
            <div className='profile__input-box profile__input-box_email'>
              <label className='profile__label'>E-mail</label>
              <p className='profile__userinfo profile__userinfo_email'>{currentUser.email}</p>
            </div>
            <button
              type='button'
              className='profile-btn profile-btn_edit'
              onClick={handleEdit}>
              Редактировать
            </button>
            </>
          )}
          <Link to='/' className='link profile__link'>
            <button
              onClick={signOut}
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