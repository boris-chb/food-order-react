import React, { useContext } from 'react';

import CartContext from '../../store/cart-context';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartContext = useContext(CartContext);

  console.log(cartContext);

  const itemsAmount = cartContext.items.reduce((currAmount, item) => {
    return currAmount + item.amount;
  }, 0);

  const { onClick } = props;
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <i className='fas fa-shopping-cart'></i>
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{itemsAmount}</span>
    </button>
  );
};

export default CartButton;
