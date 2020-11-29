import React from 'react'
import traerProductos from '../listaproductos/listaproductos'
import { useState, useEffect} from 'react'
import ItemCount from '../itemcount/itemcount'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function ItemDetail(){

  const {nombre} = useParams();
  const {precio} = useParams();
  

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
      setItem(result)
    });
  }, []);

  console.log(item)
 
   return (
    <div id="tarjetaDetail"> 
      <h3>{nombre}</h3>
      <img alt='producto'></img>
      <p>Valor: ${precio}</p>
      <ItemCount initial={1} min={1} max={10} onAdd={agregarCarrito} />
    </div>
  )
}