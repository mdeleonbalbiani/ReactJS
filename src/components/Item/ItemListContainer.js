import React, { useState, useEffect } from 'react'
import './Item.css'
import { CardGroup } from "react-bootstrap";
import ItemList from './ItemList'
import products from '../data/products.json'

const ItemListContainer = ( {itemCategory} ) => {
    
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
    }, [itemCategory]);

    let categoryTitle="";
    if (itemCategory === "nutrition") {
      categoryTitle = "Nutrición deportiva"
    }
    if (itemCategory === "food") {
      categoryTitle = "Alimentación saludable"
    }


    return( 
        <>
          <h1>{categoryTitle}</h1>
          <CardGroup className="d-flex justify-content-center container">
              <ItemList items={filteredProducts} />
          </CardGroup>
      </>
    )
}

export default ItemListContainer;