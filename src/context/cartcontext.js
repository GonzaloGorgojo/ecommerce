import React, { createContext, useContext, useEffect, useState } from "react";
import { getFirestore } from "../firebase";

export const ProductosDb = () => {
  const [listado, setListado] = useState();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("productos");

    itemCollection.get().then((response) => {
      const aux = response.docs.map((element) => {
        return element.data();
      });
      setListado(aux);
    });
  }, []);

  return (
    <>
      <div>
        {listado
          ? listado.map((element) => {
              return <p>{element.nombre}</p>;
            })
          : "cargando"}
      </div>
    </>
  );
};

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [numero, setNumero] = useState([0]);
  const [producto, setProducto] = useState([]);

  const cambiarNumero = (nuevoValor) => {
    setNumero(nuevoValor);
  };
  const cambiarProducto = (nuevoProducto) => {
    setProducto(nuevoProducto);
  };

  return (
    <CartContext.Provider
      value={{ numero, producto, cambiarNumero, cambiarProducto }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default useCartContext;
