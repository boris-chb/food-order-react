import React from 'react';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const { onClick } = props;
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <i className="fas fa-shopping-cart"></i>
      </span>
      <span>Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default CartButton;
