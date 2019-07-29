import React from 'react';
import btnremoveStyles from './RemoveButton.module.scss'

const RemoveButton = () => (
<div className={btnremoveStyles.button}>
  <span className={btnremoveStyles.left}></span>
  <span className={btnremoveStyles.right}></span>
</div>
);


export default RemoveButton;