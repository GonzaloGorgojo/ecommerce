import React from 'react'
import {Link} from 'react-router-dom' 

export default function Item({nombre}){


   return (
    <div id="tarjetaProducto">
      <Link to ={`/detalleitem/${nombre.id}${nombre.nombre}/${nombre.precio}`} style={{ textDecoration: 'none' }}>
      <h3>{nombre.nombre}</h3>
      </Link>
    </div>
    
  )
}