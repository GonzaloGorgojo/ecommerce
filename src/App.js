import React from "react";
import Home from "./components/home/home";
import Nav from "./components/navbar/NavBar";
import Cart from "./components/cart/cart"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {CartContext, CartProvider} from "./context/cartcontext"

const App = () => {
  return (
    <>
      <CartProvider>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/ecommerce/home'>
            <Home />
          </Route>
          <Route exact path='/detalleitem/:id:nombre/:precio'>
            <ItemDetailContainer />
          </Route>
          <Route exact path='/carrito'>
          <Cart/>
          </Route>
        </Switch>
      </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
