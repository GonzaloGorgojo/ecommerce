import React from "react";
import CartIcon from "../carticon/CartIcon";
import "../css/components.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import useCartContext from "../../context/cartcontext";

const Nav = () => {
  const { numero } = useCartContext();

  const numeroGuardado = Number(sessionStorage.getItem("numero"));

  const suma = () => {
    if (numeroGuardado >= 1) {
      return numeroGuardado + numero;
    } else 
      return numero;
  };

  return (
    <div className="contenedorSuperior">
      <CartIcon />
      <ul className="barraNavegacion">
        <a>
          <NavLink to={"/ecommerce"}>Productos</NavLink>
        </a>
        <a>
          <NavLink to={"/carrito"}>
            Carrito <p> {suma()} </p>
          </NavLink>
        </a>
        <a href="#">Contacto</a>
      </ul>
    </div>
  );
};
export default Nav;
