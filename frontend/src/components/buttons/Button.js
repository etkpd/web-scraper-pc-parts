import React from 'react';
import buttonStyles from './Button.module.scss'

const Button = ({onClick}) => (
  <>
    <input 
      className={buttonStyles.myButton} 
      type='button' 
      value='Login'
      onClick={onClick}
    />
  </>
);


export default Button; 


