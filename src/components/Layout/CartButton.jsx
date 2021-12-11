import React from 'react';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <i class="fas fa-shopping-cart"></i>
      </span>
      <span>Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default CartButton;
