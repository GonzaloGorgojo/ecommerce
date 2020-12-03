import React from 'react'
import useCartContext from '../../context/cartcontext'


export default function Cart(){

    const {numero, producto} = useCartContext()
    

    return (
     <div id="contenedorCarrito">
       <p>Usted va a comprar {numero} unidades de {producto} </p>
     </div>
     
   )
 }