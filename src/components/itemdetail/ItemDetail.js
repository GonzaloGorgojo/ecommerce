import React from 'react'
import traerProductos from '../listaproductos/listaproductos'
import { useState, useEffect} from 'react'
import gorra from '../imgs/gorra.jpg';
import ItemCount from '../itemcount/itemcount'

export default function ItemDetail(){

  const agregarCarrito = (contador) => {
    alert('Se agregaron ' + contador + ' unidades de su producto')
  }


  const prueba = (contador) => {
    console.log(contador)
  }

  
 const [id, setId] = useState(1);

  const ComprarItems = ({id}) => {
    return <button className="botonComprar" > Comprar {id}</button>
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
      <ItemCount initial={1} min={0} max={10} onAdd={agregarCarrito} />
      <ComprarItems id={prueba} ></ComprarItems>
      
    </div>
  )
}