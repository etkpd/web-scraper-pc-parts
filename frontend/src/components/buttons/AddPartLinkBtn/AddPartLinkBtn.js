  import React from 'react';
  import addproductStyles from './AddPartLinkBtn.module.scss'
  
  const AddPartLinkBtn = ({onClick}) => {
    return (
      <button 
        className={addproductStyles.btn}
        onClick={onClick}
      >
        <span className={addproductStyles.horizontalBar}></span>
        <span className={addproductStyles.verticalBar}></span>
      </button>
    );
  };
  
  export default AddPartLinkBtn;