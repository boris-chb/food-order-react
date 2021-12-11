import React from 'react';

import CartButton from './CartButton';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Order Food</h1>
        <CartButton />
      </header>
      <div className={classes['main-image']}>
        <img
          src="https://lp-cms-production.imgix.net/2021-07/shutterstock_646209796%20_%20greek%20gastronomy.jpg"
          alt="Food image"
        />
      </div>
    </>
  );
};

export default Header;
