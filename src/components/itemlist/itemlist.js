import React from 'react'
import traerProductos from '../listaproductos/listaproductos'
import { useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default function ItemList(){
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

  console.log(productos)
  return (
    <div>
    <h3 className="tituloLista">Lista de Productos</h3>
    <ol id="listaProductos">
        {productos.map(productos => <li key={productos.id}><a><NavLink to={'/detalleitem'}>{productos.nombre}</NavLink></a></li>)}
     </ol>
     </div>
    )  
}

