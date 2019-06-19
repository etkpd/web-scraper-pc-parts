import React from 'react';
import buttonStyles from './Button.module.scss'

const Button = ({onClick, label}) => (
  <>
    <input 
      className={buttonStyles.myButton} 
      type='button' 
      value={label}
      onClick={onClick}
    />
  </>
);


export default Button; 


