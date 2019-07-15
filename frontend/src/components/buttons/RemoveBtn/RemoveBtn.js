import React from 'react';
import btnremoveStyles from './RemoveBtn.module.scss'

const RemoveBtn = () => (
<div className={btnremoveStyles.button}>
  <span className={btnremoveStyles.left}></span>
  <span className={btnremoveStyles.right}></span>
</div>
);


export default RemoveBtn;