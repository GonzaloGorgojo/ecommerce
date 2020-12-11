import React from "react";
import useCartContext from "../../context/cartcontext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { numero, producto } = useCartContext();

  const MuestraCompra = ({ condition }) => {
    condition = numero;

    if (condition == 0) {
      return (
        <div id="contenedorCarritoVacio">
          <p>Usted No tiene Items En el Carrito</p>
          <Link to={`/ecommerce`} style={{ textDecoration: "none" }}>
            <h4>Vuelva a La Lista de Productos</h4>
          </Link>
        </div>
      );
    } if (Number(sessionStorage.getItem("numero")) != 0){
    return (
      <>
      <div id="contenedorCarrito">
        <p>
          Usted va a comprar {numero} unidades de {producto}
        </p>
      </div>
      <div id="contenedorCarrito">
        <p>
        (Orden Anterior) Usted va a comprar {sessionStorage.getItem("numero")} unidades de {sessionStorage.getItem("producto")}
        </p>
      </div>
      <div id="contenedorCarrito">
        <p>
          Seria un total de {Number(sessionStorage.getItem("numero")) + numero} productos.
        </p>
      </div>
      </>
    );
  } else { sessionStorage.setItem("numero", numero)
            sessionStorage.setItem("producto", producto)
  return (
    <div id="contenedorCarrito">
      <p>
        Usted va a comprar {numero} unidades de {producto}
      </p>
    </div>
  );
  }
  };

  return <MuestraCompra />;
}
