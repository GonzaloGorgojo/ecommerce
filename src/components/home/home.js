import React from 'react';
import '../css/components.css';

const {default: ItemCount} = require("../itemcount/itemcount");



const Home = () => {

  const agregarCarrito = (contador) => {
    alert('Se agregaron ' + contador + ' unidades de su producto')
  }


  return <>
  <div className='contenedor'>
    <ItemCount initial={1} min={0} max ={10} onAdd={agregarCarrito}/>
  </div>
  </>
}

export default Home;


