import React from 'react';
import ItemList from '../itemlist/itemlist'
import '../css/components.css';
import Item from '../item/item';


const Home = () => {

  return <>
  <div className='contenedorHome'>
    <div id="contenedorLista">
      <ItemList/>
    </div>
      <Item/>
  </div>
  </>
}

export default Home;


