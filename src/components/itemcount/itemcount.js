import React, { useState } from 'react';
import '../css/components.css';
import {Link} from 'react-router-dom' 
import useCartContext from '../../context/cartcontext'


export default function ItemCount({initial, min, max, onAdd }) {
  
  const {cambiarNumero} = useCartContext()
  
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
          <Link to={'/carrito'} style={{ textDecoration: 'none', color: 'black' }}><button className='botonAgregarCarrito' onClick={() => {controladorCarrito();cambiarNumero(contador)}}>Comprar {contador}</button></Link>
        </div>
    </>;
  }
