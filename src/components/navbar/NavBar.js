import React from 'react';
import CartIcon from '../carticon/CartIcon';
import '../css/components.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

const Nav = () => { 
    return (
      <div className = "contenedorSuperior">
        <CartIcon/>
        <ul className = "barraNavegacion">
        <a><NavLink to={'/'}>Productos</NavLink></a>
          <a href="#">Nosotros</a>
          <a href="#">Contacto</a>
        </ul>
      </div>
    )
  }
export default Nav;