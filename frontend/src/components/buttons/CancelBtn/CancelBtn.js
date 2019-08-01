import React from 'react';
import btncancelStyles from './CancelBtn.module.scss'

const CancelBtn = ({onClick}) => (
  <div 
    className={btncancelStyles.button}
    onClick={onClick}
  >
    <span className={btncancelStyles.left}></span>
    <span className={btncancelStyles.right}></span>
  </div>
);


export default CancelBtn;