import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return(
    <section className='search'>
      <form className='search__form'>
        <input 
        type='text'
        className='form__input form__input_search'
        placeholder='Фильм'
        name='movie'
        required
        />
        <button className='search-form__button' type='submit' />
      </form>
      <div className='search__switch-shorts'>
        <FilterCheckbox />
        <p className='search__switch-shorts__subtitle'>Короткометражки</p>
      </div>
    </section>
  )
}

export default SearchForm;