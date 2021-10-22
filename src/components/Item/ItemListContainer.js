import React, { useState, useEffect } from 'react';
import { CardGroup } from "react-bootstrap";
import ItemList from './ItemList'
//import products from '../data/products.json'
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

    /* useEffect(() => {
      const data = getFirestore();
      const itemCollection = data.collection('products');

      itemCollection.get().then((item) => {        
        setProductsList(item.docs.map(doc => doc.data()));
        console.log(productsList);
        setFilteredProducts(productsList.filter(item => (item.category === itemCategory)));
        console.log(filteredProducts);
      }).catch((error) => {
        console.log('Error al traer los items' , error);
      });
    }, [itemCategory] ); */


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