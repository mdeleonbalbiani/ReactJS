import React, { useState, useEffect } from 'react'
import './Item.css'
import { CardGroup } from "react-bootstrap";
import ItemList from './ItemList'
import products from '../data/products.json'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    let {category} = useParams();
    console.log({category});
    const [productList, setProductList] = useState(0);

    useEffect(() => {
        const data = new Promise((resolve, reject) => {
          setTimeout(function () {
            resolve(products);
          }, 2000);
        });
    
        data.then((response) => {
          setProductList(response);
        });
      }, []);

    return( 
        <>
          <CardGroup className="d-flex justify-content-center container">
              <ItemList items={productList} category={category}/>
          </CardGroup>
      </>
    )
}

export default ItemListContainer;