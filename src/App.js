import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

import CartProvider from "./store/CartProvider";

function App() {
  const [cartOn, setCartOn] = useState(false);

  function openCart() {
    setCartOn(true)
  }

  function closeCart() {
    setCartOn(false);
  }

  return (
    <CartProvider>
      {cartOn && <Cart closeCart={closeCart}/>}
      <Header openCart={openCart}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
