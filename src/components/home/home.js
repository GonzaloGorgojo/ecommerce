import React, { useState } from 'react';
import '../css/components.css';


const Saludo = ({greeting}) => { 
  return (
    <h2 className="saludo">{greeting}</h2>
  )
}

const ItemCount = () => {
  const [contador, setContador] = useState(0);

  const sumarNumero = () => {
    setContador(contador + 1);
  };
  const restarNumero = () => {
    setContador(contador -1);
  }


  return <>
    <div className = 'contenedor' >
      <Saludo greeting="Bienvenido!"/>
      <div className = 'tarjeta'>
        <p className = 'productoUno'>Portamacetas Macrame</p>
        <button className = 'botonSuma' onClick={() => { restarNumero(); } }>-</button>
        <p className = 'numeroContador'>{contador}</p>
        <button className = 'botonResta' onClick={() => { sumarNumero(); } }>+</button>
      </div>
    </div>
  </>;
}


export default ItemCount

