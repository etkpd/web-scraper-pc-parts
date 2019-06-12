import React from 'react';

const Input = ({name, type, placeholder}) => {
  return (
    <div className="Input">
				<input id={name} autoComplete="false" required type={type} placeholder={placeholder} />	
				<label htmlFor={name}></label>
		</div>
  );
};

export default Input;