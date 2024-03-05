import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({handleSwitchShorts, isShortSwitch}) {

  return(
    <label className='filter-checkbox'>
      <input 
        // onChange={handleSwitchShorts}
        type="checkbox"
        className='filter-checkbox__input' 
        // checked={isShortSwitch}
      />
      <span className="filter-checkbox__slider"></span>
    </label>
  )
}

export default FilterCheckbox;