import defaultCartState from './CartProvider';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItems = [...state.items, action.payload];
      const newTotal =
        state.totalAmount + action.payload.amount * action.payload.price;
      return { items: newItems, totalAmount: newTotal };
    case 'REMOVE_ITEM':
      //TOOD
      return { ...state };
    default:
      return defaultCartState;
  }
};

export default cartReducer;
