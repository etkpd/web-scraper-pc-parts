  import React from 'react';
  import alertStyles from './PopupAlert.module.scss';

  const PopupAlert = ({onClick}) => {
    return (
      <div id="alert-area" className={alertStyles.alertArea}>
        <div 
          className={alertStyles.alertBox}
          onClick={onClick}
        >
            Invalid Credentials
        </div>
      </div>
    );
  };
  
  export default PopupAlert;