import React from 'react'
import { Spinner } from "react-bootstrap";
import Item from './Item';

function ItemList( {items} ) {
  const style={margin:"3%"}
    return (
        <>
          {items.length ? (
            items.map((elem, idx) => <Item props={elem} key={idx} />)
          ) : (
            <Spinner animation="border" variant="primary" style={style}/>
          )}
        </>
      );
  }

export default ItemList;