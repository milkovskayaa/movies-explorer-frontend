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
  setSearchError
}) {

  const { values, handleChange } = useFormWithValidation();

  const handleSwithShorts = () => {
    if (!isShortSwitch) {
      setShortSwitch(true);
      findMovies(movies, values.movie || '', isShortSwitch)
    }
    else {
      setShortSwitch(false);
      findMovies(movies, values.movie || '', isShortSwitch)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchMovie(values.movie)
    console.log(values.movie)
  }

  return(
    <section className='search'>
      <form className='search__form' onSubmit={handleSubmit}>
        <input 
        onChange={handleChange}
        // defaultValue={values.movie}
        type='text'
        className='search__form-input'
        placeholder='Фильм'
        name='movie'
        required
        />
        <button className='search__form-button' type='submit' />
      </form>
      <div className='search__switch-shorts'>
        <FilterCheckbox handleSwithShorts={handleSwithShorts} isShortSwitch={isShortSwitch} />
        <p className='search__switch-shorts__subtitle'>Короткометражки</p>
      </div>
    </section>
  )
}

export default SearchForm;