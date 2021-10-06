import React from 'react'
import './Item.css'
import { Spinner } from "react-bootstrap";
import Item from './Item';

function ItemList( {items, category} ) {
    return (
        <>
          {items.length ? (
            items.map((elem, id, category) => <Item props={elem} key={id} cat={category}/>)
          ) : (
            <Spinner animation="border" variant="primary" className="spinner"/>
          )}
        </>
      );
  }

export default ItemList;