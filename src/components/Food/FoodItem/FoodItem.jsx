import React, { useContext } from 'react';

import CartContext from '../../../store/cart-context';

import classes from './styles/FoodItem.module.css';
import FoodItemForm from './FoodItemForm';

const FoodItem = (props) => {
  const { name, description, price, id } = props;
  const cartContext = useContext(CartContext);

  const onAddToCart = (amount) => {
    cartContext.addItem({
      id,
      name,
      price,
      amount,
    });
  };

  return (
    <li className={classes.food}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{`$${price.toFixed(2)}`}</div>
      </div>
      <div>
        <FoodItemForm onAddToCart={onAddToCart} />
      </div>
    </li>
  );
};

export default FoodItem;
