import React from 'react';

const Input = ({name, type, placeholder, className, value, onChange}) => {
  return (
    <div className="Input">
        <input 
          id={name} 
          name={name}
          className={className}
          value={value}
          onChange={onChange} 
          autoComplete="false" 
          required type={type} 
          placeholder={placeholder} />	
		</div>
  );
};

export default Input;