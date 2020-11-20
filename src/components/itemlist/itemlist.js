import React from 'react'
import traerProductos from '../listaproductos/listaproductos'
import { useState, useEffect} from 'react'

export default function ItemList(){
    const [productos, setProductos] = useState([])

  useEffect(() => {
    traerProductos()
    .then((result) => {
      return JSON.parse(result);
    })
    .then((result) => {
      setProductos(result)
    });
  }, []);

  return (
    <div>
    <h3 className="tituloLista">Lista de Productos</h3>
    <ol id="listaProductos">
        {productos.map(productos => <li key={productos.id}>{productos.nombre}</li>)}
     </ol>
     </div>
    )  
}

