import React, { useReducer } from 'react';
import CartContext from './cart-context';
import cartReducer from './cartReducer';

export const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const onAddCartItem = (item) => {
    dispatchCart({ type: 'ADD_ITEM', payload: item });
  };

  const onRemoveCartItem = (id) => {
    dispatchCart({ type: 'REMOVE_ITEM', payload: id });
  };

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: onAddCartItem,
    removeItem: onRemoveCartItem,
  };

  return <CartContext.Provider>{children}</CartContext.Provider>;
};

export default CartProvider;
