import React from "react";
import useCartContext from "../../context/cartcontext";
import {Link} from 'react-router-dom' 

export default function Cart() {
  const { numero, producto } = useCartContext();

  const MuestraCompra = ({ condition }) => {
    condition = numero;

    if (condition === 0) {
      return (
        <div id="contenedorCarritoVacio">
          <p>
            Usted No tiene Items En el Carrito
          </p>
          <Link to ={`/ecommerce/home`} style={{ textDecoration: 'none' }}>
      <h4>Vuelva a La Lista de Productos</h4>
      </Link>
        </div>
      );
    }
    return (
      <div id="contenedorCarrito">
        <p>
          Usted va a comprar {numero} unidades de {producto}{" "}
        </p>
      </div>
    );
  };

  return <MuestraCompra />;
}
