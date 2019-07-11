import React from 'react';
import headerStyles from './Header.module.scss';

const Header = ({productName}) => {
  return (
      <h5 className={headerStyles.header}>{productName}</h5>
  );
};

export default Header;