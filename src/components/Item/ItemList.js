import React from 'react'
import { Spinner } from "react-bootstrap";
import Item from './Item';

function ItemList( {items} ) {

    return (
        <>
          {items.length ? (
            items.map((elem, index) => <Item props={elem} key={index} />)
          ) : (
            <Spinner animation="border" variant="primary" className="spinner"/>
          )}
        </>
      );
  }

export default ItemList;