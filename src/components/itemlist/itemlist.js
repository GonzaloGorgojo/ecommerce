import React from "react";
import Item from "../item/item";

export default function ItemList ({productos}) {
  
  
  return(
    <div id='contenedorLista'>
      {productos.map((nombre, id) => (
        <Item key={id} nombre={nombre} />
      ))}
    </div>
  )
}


