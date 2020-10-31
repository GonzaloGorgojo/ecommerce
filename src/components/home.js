import React from 'react';
import './components.css';


const Saludo = ({greeting}) => { 
    return (
      <h2 className="saludo">{greeting}</h2>
    )
  }
  
export default Saludo;