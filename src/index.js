import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/NavBar';
import Saludo from './components/home';
import './index.css';



ReactDOM.render(
  <div>
  <Nav/>
  <Saludo greeting="Bienvenido !"/>
  </div>,
  document.getElementById('root')
);


