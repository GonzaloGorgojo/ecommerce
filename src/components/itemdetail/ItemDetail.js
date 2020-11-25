import React from 'react'
import traerProductos from '../listaproductos/listaproductos'
import { useState, useEffect} from 'react'
import gorra from '../imgs/gorra.jpg';
import ItemCount from '../itemcount/itemcount'

export default function ItemDetail(){

  const agregarCarrito = (contador) => {
    alert('Usted comprara ' + contador + ' unidades de su producto')
  }
 

  const [item, setItem] = useState([]);

  useEffect(() => {
    traerProductos()
    .then((result) => {
      return JSON.parse(result);
    })
    .then((result) => {
      setItem(result[1])
    });
  }, []);
 
   return (
    <div id="tarjetaDetail">
      <h3>{item.nombre}</h3>
      <img src={gorra} alt='gorra'></img>
      <p>Valor: ${item.precio}</p>
      <ItemCount initial={1} min={1} max={10} onAdd={agregarCarrito} />      
    </div>
  )
}