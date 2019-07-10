import React from 'react';
import dropdownStyles from './HistoryDropDown.module.scss';

const HistoryDropDown = ({ currentValue, values, onChange }) => (
  <div className={dropdownStyles.main}>
    <h5 className={dropdownStyles.selectLabel}>History:</h5>
    <select 
      onChange={onChange} 
      value={currentValue} 
      className={dropdownStyles.select}
      >
      {values.map((value) => <option value={value} key={value} className={dropdownStyles.option}>{value}</option>)}
    </select>
  </div>
);


export default HistoryDropDown; 