import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormWithValidation } from '../../utils/formValidator';

function SearchForm({
  movies,
  handleSearchMovie,
  isShortSwitch,
  setShortSwitch,
  findMovies,
  searchError,
  setSearchError,
  searchValue
}) {

  const { values, handleChange } = useFormWithValidation();

  const handleChangeCheckbox = () => {
    setShortSwitch(!isShortSwitch)
    if (isShortSwitch === true) {
      findMovies(movies, values.movie || '', true)
    }
    else {
      findMovies(movies, values.movie || '', false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.movie === '' || values.movie === undefined) {
      setSearchError('Нужно ввести ключевое слово');
    }
    else {
      handleSearchMovie(values.movie);
    }
  }

  return(
    <section className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <input 
        onChange={handleChange}
        defaultValue={searchValue}
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