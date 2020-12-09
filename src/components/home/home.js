import React from "react";
import ItemList from "../itemlist/itemlist";
import "../css/components.css";
import traerProductos from '../../listaproductos/listaproductos'
import { useState, useEffect} from 'react'


const Home = () => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    traerProductos()
    .then((result) => {
      return JSON.parse(result);
    })
    .then((result) => {
      setProductos(result)
    });
  }, []);



  return (
    <>
      <div id="contenedorHome">
          <ItemList productos={productos}/>
      </div>
    </>
  );
};

export default Home;
