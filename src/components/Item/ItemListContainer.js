import React, { useState, useEffect } from 'react';
import { CardGroup } from "react-bootstrap";
import ItemList from './ItemList'
import { getFirestore } from '../../firebase'

const ItemListContainer = ( {itemCategory} ) => {
    const [filteredProducts, setFilteredProducts] = useState(0)

    useEffect(() => {
      const getProducts = async () => {
        const { docs } = await getFirestore().collection("products").get();
        const newArray = docs.map((item) => ({ id: item.id, ...item.data() }));
        console.log(newArray);
        setFilteredProducts(newArray.filter((item) => (item.category === itemCategory)))
    };
    getProducts();
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