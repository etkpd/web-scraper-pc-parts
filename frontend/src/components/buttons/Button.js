import React from 'react';
import buttonStyles from './Button.module.scss'


const TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
}

const BaseButton = ({ label, onClick, buttonType}) => (
  <input
    type='button'
    value={label}
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


