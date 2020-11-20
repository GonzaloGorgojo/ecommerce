import React from 'react'
import traerProductos from '../listaproductos/listaproductos'
import { useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'


export default function Item(){

  const [producto, setProducto] = useState([])

  useEffect(() => {
    traerProductos()
    .then((result) => {
      return JSON.parse(result);
    })
    .then((result) => {
      setProducto(result[1])
    });
  }, []);

   return (
    <div id="tarjetaProducto">
      <h3>{producto.nombre}</h3>
      <p>Valor: ${producto.precio}</p>
      <a><NavLink to={'/detalleitem'}>Detalle</NavLink></a>
    </div>
    
  )
}