import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from '../../utils/formValidator';
import { useLocation } from 'react-router-dom';

function SearchForm({
  movies,
  handleSearchMovie,
  isShortSwitch,
  setShortSwitch,
  findMovies,
  searchError,
  setSearchError,
  searchValue,
  setSearchValue
}) {

  const { values, handleChange, resetForm } = useFormWithValidation();
  const location = useLocation();

  const handleChangeCheckbox = () => {
    if (isShortSwitch) {
      setShortSwitch(false)
      findMovies(movies, values.movie || '', false)
    }
    else {
      setShortSwitch(true)
      findMovies(movies, values.movie || '', true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.movie === '' || values.movie === undefined) {
      setSearchError('Нужно ввести ключевое слово');
    }
    else {
      handleSearchMovie(values.movie);
      setSearchError('');
    }
  }

  React.useEffect(() => {
    if (location.pathname === '/saved-movies') {
      setSearchValue('');
    }
  })

  React.useEffect(() => {
    if (location.pathname === '/movies') {
      resetForm({movie: searchValue})
    }
  }, [resetForm, location, searchValue])

  console.log(searchValue)

  return(
    <section className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <input 
        onChange={handleChange}
        value={values.movie || ''}
        type='text'
        className='search__form-input'
        placeholder='Фильм'
        name='movie'
        />
        <button className='search__form-button' type='submit' />
      </form>
      <span className='form__error search__form-error'>{searchError}</span>
      <div className='search__switch-shorts'>
        <FilterCheckbox isShortSwitch={isShortSwitch} handleChangeCheckbox={handleChangeCheckbox}/>
        <p className='search__switch-shorts__subtitle'>Короткометражки</p>
      </div>
    </section>
  )
}

export default SearchForm;