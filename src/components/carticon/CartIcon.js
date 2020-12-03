import React from 'react';
import pic from '../../imgs/logo.jpg';
import '../css/components.css'

const CartIcon = () => { 
    return (
      <div className="Logo">
      <img src={pic} alt='Logo' ></img>
      </div>
    )
  }
  
export default CartIcon;