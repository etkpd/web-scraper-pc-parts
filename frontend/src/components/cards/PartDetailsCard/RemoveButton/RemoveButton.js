import React from 'react';
import btnremoveStyles from './RemoveButton.module.scss'

const RemoveButton = ({onClick}) => (
<div 
  className={btnremoveStyles.button}
  onClick={onClick}
>
  <span className={btnremoveStyles.left}></span>
  <span className={btnremoveStyles.right}></span>
</div>
);


export default RemoveButton;