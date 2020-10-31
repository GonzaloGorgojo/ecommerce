import React from 'react';
import Icon from './CartIcon';
import './components.css'

const Nav = () => { 
    return (
      <div className = "contenedorSuperior">
        <Icon/>
        <ul className = "barraNavegacion">
          <a href="#">Productos</a>
          <a href="#">Nosotros</a>
          <a href="#">Contacto</a>
        </ul>
      </div>
    )
  }
export default Nav;