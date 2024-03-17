import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({isShortSwitch, handleChangeCheckbox}) {

  const handleChange = () => {
    handleChangeCheckbox(isShortSwitch);
  }

  return(
    <label htmlFor='checkbox' className='filter-checkbox'>
      <input 
        type="checkbox"
        id='checkbox'
        className='filter-checkbox__input' 
        checked={isShortSwitch}
        onChange={handleChange}
      />
      <span className="filter-checkbox__slider"></span>
    </label>
  )
}

export default FilterCheckbox;