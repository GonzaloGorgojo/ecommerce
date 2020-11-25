import React, { useState } from 'react';
import '../css/components.css';


export default function ItemCount({initial, min, max, onAdd}) {
    const [contador, setContador] = useState(initial);
  
    const sumarNumero = () => {
      if (contador < max) setContador(contador + 1);
    };
    const restarNumero = () => {
      if (contador > min) setContador(contador -1);
    }
  
    const controladorCarrito = () => {
        onAdd(contador);
    }
  
    return <>
        <div className = 'contador'>
          <button className = 'botonSuma' onClick={() => { restarNumero(); } }>-</button>
          <p className = 'numeroContador'>{contador}</p>
          <button className = 'botonResta' onClick={() => { sumarNumero(); } }>+</button>
          <button className='botonAgregarCarrito' onClick={() => {controladorCarrito(); } }>Comprar {contador}</button>
        </div>
    </>;
  }
