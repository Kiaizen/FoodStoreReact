import { useState } from "react";
import Header from "./compoments/Layout/Header";
import Meals from "./compoments/Meals/Meals";
import Cart from "./compoments/Cart/Cart";
import CartProvider from "./store/CartProvider";


function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler =() => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
