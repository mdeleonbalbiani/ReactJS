import React from 'react'
import { Spinner } from "react-bootstrap";
import Item from './Item';

function ItemList( {items} ) {
    const Style = {
      marginTop: "3%"
    }


    return (
        <>
          {items.length ? (
            items.map((elem, index) => <Item props={elem} key={index} />)
          ) : (
            <Spinner animation="border" variant="primary" style={Style}/>
          )}
        </>
      );
  }

export default ItemList;