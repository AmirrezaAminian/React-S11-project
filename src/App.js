import React, { useState, Fragment } from "react";
import Header from "./components/Layout/Header";

import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Cartprovider from "./store/CartProvider";

function App() {
  const [cartIsShown , setCartIsShown] = useState(false)

  const  showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <Cartprovider>
     { cartIsShown && <Cart  onClose={hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Cartprovider>
  );
}

export default App;
