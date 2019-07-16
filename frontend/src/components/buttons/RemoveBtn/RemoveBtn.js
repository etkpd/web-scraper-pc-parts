import React from 'react';
import btnremoveStyles from './RemoveBtn.module.scss'

const RemoveBtn = ({onClick}) => (
  <div 
    className={btnremoveStyles.button}
    onClick={onClick}
  >
    <span className={btnremoveStyles.left}></span>
    <span className={btnremoveStyles.right}></span>
  </div>
);


export default RemoveBtn;