import React from 'react';
import buttonStyles from './Button.module.scss'


const TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SIGNIN: 'signin'
}

const BaseButton = ({ type, label, onClick, buttonType}) => (
  <input
    type={type}
    defaultValue={label}
    onClick={onClick}
    className={`
      ${buttonStyles.myButton} 
      ${buttonStyles[ buttonType ]}
    `}
  />
);

export const Primary = props => (
  <BaseButton { ...props } buttonType={TYPES.PRIMARY} />
);

export const Secondary = props => (
  <BaseButton { ...props } buttonType={TYPES.SECONDARY} />
);

export const SignIn = props => (
  <BaseButton { ...props } buttonType={TYPES.SIGNIN} />
);


