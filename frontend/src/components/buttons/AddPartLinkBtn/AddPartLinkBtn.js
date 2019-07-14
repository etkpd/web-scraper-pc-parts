  import React from 'react';
  import addproductStyles from './AddPartLinkBtn.module.scss'
  
  const AddPartLinkBtn = () => {
    return (
      <button className={addproductStyles.btn}>
        <span className={addproductStyles.horizontalBar}></span>
        <span className={addproductStyles.verticalBar}></span>
      </button>
    );
  };
  
  export default AddPartLinkBtn;