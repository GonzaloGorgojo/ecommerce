import React from 'react';
import pic from './imgs/logo.jpg';
import './components.css'

const Icon = () => { 
    return (
      <div className="Logo">
      <img src={pic} alt='Logo' ></img>
      </div>
    )
  }
  
export default Icon;