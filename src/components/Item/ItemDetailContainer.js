import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import products from '../data/products.json';
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";


const ItemDetailContainer = () => {

  const { id } = useParams();
  const [itemFiltered, setItemFiltered] = useState(0);

  useEffect(() => {
    const data = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(products);
      }, 1000);
    });

    data.then( response => {
      setItemFiltered( response.filter(item => (item.id === id)) );
    });
  }, [id]);


  return (
    <>
     {itemFiltered.length ? (
        <ItemDetail props={itemFiltered[0]}/>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </>
  );
}

export default ItemDetailContainer;