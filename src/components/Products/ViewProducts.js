import React, { useState, useEffect } from 'react';
import ButtonAppBar from '../ButtonAppBar';
import BottomNavigator from '../BottomNavigator';
import FetchProductService from '../../services/FetchProductService';
import Card from '../Cards/Card';
import './ViewProducts.css';

const ViewProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    FetchProductService.getProduct()
    .then(res => setProducts(res.data))
    .catch(err => console.log(err));
  }, []);

  const isAuthenticated = localStorage.getItem('isAuthenticated');

  if(isAuthenticated === "false") {
    window.location.href = "/";
  } else {
    return (
      <>
          <ButtonAppBar />
          <h1>View Products</h1>
          <div className='vp-container'>
            {products.map((product, index) => { 
              return (
                   <>
                    <Card {...product}/>
                   </>
                );
              })}
          </div>
          <BottomNavigator />
      </>
    )
  }
}

export default ViewProducts;