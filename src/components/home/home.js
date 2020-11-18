import React from 'react';
import ItemList from '../itemlist/itemlist'
import '../css/components.css';
import Item from '../item/item';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'


const Home = () => {

  return <>
  <div className='contenedorHome'>
    <div id="contenedorLista">
      <ItemList/>
    </div>
      <Item/>
      <ItemDetailContainer/>
  </div>
  </>
}

export default Home;


