import React from 'react'
import traerProductos from '../listaproductos/listaproductos'
import { useState, useEffect} from 'react'
import ItemCount from '../itemcount/itemcount'

export default function Item(){

  const agregarCarrito = (contador) => {
    alert('Se agregaron ' + contador + ' unidades de su producto')
  }

  const [producto, setProducto] = useState([])

  useEffect(() => {
    traerProductos()
    .then((result) => {
      return JSON.parse(result);
    })
    .then((result) => {
      setProducto(result[0])
    });
  }, []);

   return (
    <div id="tarjetaProducto">
      <h3>{producto.nombre}</h3>
      <p>Valor: ${producto.precio}</p>
      <ItemCount initial={1} min={0} max ={10} onAdd={agregarCarrito}/> 
    </div>
  )
}