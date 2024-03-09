import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({isShortSwitch, handleChangeShorts}) {

  const handleChange = () => {
    handleChangeShorts();
  }

  return(
    <label htmlFor='checkbox' className='filter-checkbox'>
      <input 
        type="checkbox"
        id='checkbox'
        className='filter-checkbox__input' 
        defaultChecked={isShortSwitch}
        onChange={handleChange}
      />
      <span className="filter-checkbox__slider"></span>
    </label>
  )
}

export default FilterCheckbox;