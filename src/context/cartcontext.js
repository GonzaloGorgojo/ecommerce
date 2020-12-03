import React, { createContext, useContext, useState } from 'react'


const CartContext = createContext()
const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [numero, setNumero] = useState(" 1 ");
    const [producto, setProducto] = useState(" Producto ");

    const cambiarNumero = (nuevoValor) => {
        setNumero(nuevoValor)
    }
    const cambiarProducto = (nuevoValor) => {
        setProducto(nuevoValor)
    }

    return <CartContext.Provider value={{numero, producto, cambiarNumero, cambiarProducto}}>
        {children}
    </CartContext.Provider>
}

export default useCartContext