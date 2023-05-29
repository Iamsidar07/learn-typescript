import React, { useState } from 'react';
import './App.css';
import { IProduct } from '../types';
import { Product } from './components';

function App() {
  const [products,setProducts] = useState<IProduct[]>([
    {
    id:1,
    title:"Chauua",
    price:102,
  },
    {
    id:2,
    title:"Le Chauua",
    price:122,
  },
]);

const handleAddToCart = (id: number) =>{
  console.log('Clicked',id);

}
  return (
    <>
    {
        products.map((product) => <Product product={product} key={product.id} handleAddToCartClick = {handleAddToCart }/>)
    }
    </>
  );
}

export default App;
