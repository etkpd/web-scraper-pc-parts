import React from 'react';

const Input = ({name, type, placeholder, className, value, onChange}) => {
  return (
    <input 
      id={name} 
      name={name}
      className={className}
      value={value}
      onChange={onChange} 
      autoComplete="false" 
      required type={type} 
      placeholder={placeholder} 
    />	
  );
};

export default Input;