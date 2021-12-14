import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Food from './components/Food/Food';
import Cart from './components/Cart/Cart';

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <>
      {showCart && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Food />
      </main>
    </>
  );
};

export default App;
