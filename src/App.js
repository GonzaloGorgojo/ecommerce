import React from "react";
import Home from "./components/home/home";
import Nav from "./components/navbar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/detalleitem/:id:nombre/:precio'>
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
