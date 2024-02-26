import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return(
    <label className='filter-checkbox'>
      <input type="checkbox" className='filter-checkbox__input' />
      <span className="filter-checkbox__slider"></span>
    </label>
  )
}

export default FilterCheckbox;