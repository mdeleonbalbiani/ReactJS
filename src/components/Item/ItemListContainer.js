import React, { useState, useEffect } from 'react'
import './Item.css'
import { CardGroup } from "react-bootstrap";
import ItemList from './ItemList'
import products from '../data/products.json'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const { itemCategory } = useParams();
    /* console.log(itemCategory);
    console.log(typeof itemCategory); */
    
    const [productList, setProductList] = useState(0);
    const [filteredProducts, setFilteredProducts] = useState(0)

    useEffect(() => {
      const data = new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve(products);
        }, 2000);
      });
  
      data.then( response => {
        setProductList(response);
        setFilteredProducts( response.filter(item => (item.category === itemCategory)) );
      });
    }, []);


    return( 
        <>
          <CardGroup className="d-flex justify-content-center container">
              <ItemList items={filteredProducts} />
          </CardGroup>
      </>
    )
}

export default ItemListContainer;