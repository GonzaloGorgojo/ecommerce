import React from 'react'
import traerProductos from '../listaproductos/listaproductos'
import { useState, useEffect} from 'react'



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
    </div>
    
  )
}