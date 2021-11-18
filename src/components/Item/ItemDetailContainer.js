import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { getFirestore } from '../../firebase'

const ItemDetailContainer = () => {

  const { id: itemId } = useParams();
  const [itemFiltered, setItemFiltered] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      const { docs } = await getFirestore().collection("products").get();
      const newArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      const findProduct = newArray.filter((item) => (item.id === itemId));
      setItemFiltered(findProduct);
  };
    getProducts();
    }, [itemId]);

  return (
    <>
     {itemFiltered.length ? (
        <ItemDetail props={itemFiltered[0]}/>
      ) : (
        <Spinner animation="border" variant="primary" className="spinner"/>
      )}
    </>
  );
}

export default ItemDetailContainer;