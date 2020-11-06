import React from 'react';
import CartIcon from '../carticon/CartIcon';
import '../css/components.css'

const Nav = () => { 
    return (
      <div className = "contenedorSuperior">
        <CartIcon/>
        <ul className = "barraNavegacion">
          <a href="#">Productos</a>
          <a href="#">Nosotros</a>
          <a href="#">Contacto</a>
        </ul>
      </div>
    )
  }
export default Nav;