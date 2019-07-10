import React from 'react';
import headerStyles from './Header.module.scss';

const Header = ({productName}) => {
  return (
    <div>
      <h5 className={headerStyles.header}>{productName}</h5>
    </div>
  );
};

export default Header;