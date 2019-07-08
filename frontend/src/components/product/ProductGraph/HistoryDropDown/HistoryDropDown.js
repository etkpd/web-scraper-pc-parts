import React from 'react';

const HistoryDropDown = ({ currentValue, values, onChange }) => (
  <select onChange={onChange} value={currentValue} style={{ width: 95 }}>
    {values.map((value) => <option value={value} key={value}>{value}</option>)}
  </select>
);


export default HistoryDropDown; 