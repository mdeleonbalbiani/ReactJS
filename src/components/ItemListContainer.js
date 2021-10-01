import React, { useState, useEffect } from 'react'
import { Row, Col } from "react-bootstrap";
import ItemList from './ItemList'
import products from './data/products.json'

const ItemListContainer = () => {
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
          <Row className="item-list-container">
            <Col md={12} className="d-flex justify-content-center">
              <ItemList items={productList} />
            </Col>
          </Row>
      </>
    )
}

export default ItemListContainer;