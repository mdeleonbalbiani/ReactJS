import React from 'react'
import './Item.css'
import { Spinner } from "react-bootstrap";
import Item from './Item';

function ItemList( {items} ) {
    const Style = {
      marginTop: "3%"
    }

    const productList = items.length ? (
      items.map((elem, index) => <Item props={elem} key={index} />)
    ) : (
      <Spinner animation="border" variant="primary" style={Style}/>
    )

    return (
        <>
          {productList}
        </>
      );
  }

export default ItemList;