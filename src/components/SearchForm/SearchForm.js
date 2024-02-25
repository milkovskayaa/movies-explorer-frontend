import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return(
    <section className='search'>
      <form className='search__form'>
        <input 
        type='text'
        className='search__form-input'
        placeholder='Фильм'
        name='movie'
        required
        />
        <button className='search__form-button' type='submit' />
      </form>
      <div className='search__switch-shorts'>
        <FilterCheckbox />
        <p className='search__switch-shorts__subtitle'>Короткометражки</p>
      </div>
    </section>
  )
}

export default SearchForm;