import React from "react";
import ItemList from "../itemlist/itemlist";
import Nav from '../navbar/NavBar';
import "../css/components.css";
import Item from "../item/item";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Switch>
          <div className="contenedorHome">
          <Route exact path="/">
            <div id="contenedorLista">
              <ItemList />
            </div>
            <Item/>
          </Route>
          <Route exact path="/detalleitem">
            <ItemDetailContainer />
          </Route>
          </div>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Home;
