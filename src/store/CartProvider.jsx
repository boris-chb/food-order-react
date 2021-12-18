import React, { useReducer } from 'react';
import CartContext from './cart-context';
import cartReducer from './cartReducer';

export const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartProvider = ({ children }) => {
  // Used as a wrapper component to provide state access to children
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  // Actions Dispatch to the Reducer
  const onAddCartItem = (item) => {
    dispatchCart({ type: 'ADD_ITEM', payload: item });
  };

  const onRemoveCartItem = (id) => {
    dispatchCart({ type: 'REMOVE_ITEM', payload: id });
  };

  // default cart context
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: onAddCartItem,
    removeItem: onRemoveCartItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
