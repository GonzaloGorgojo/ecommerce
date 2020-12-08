import React from 'react';
import CartIcon from '../carticon/CartIcon';
import '../css/components.css'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import useCartContext from '../../context/cartcontext'

const Nav = () => { 

  const {numero} = useCartContext()

    return (
      <div className = "contenedorSuperior">
        <CartIcon/>
        <ul className = "barraNavegacion">
        <a><NavLink to={'/ecommerce'}>Productos</NavLink></a>
    <a><NavLink to={'/carrito'}>Carrito <p> {numero} </p></NavLink></a>
          <a href="#">Contacto</a>
        </ul>
      </div>
    )
  }
export default Nav;