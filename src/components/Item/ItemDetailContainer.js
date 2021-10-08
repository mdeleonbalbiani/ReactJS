import React from "react";
import './Item.css'
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = (props) => {
  return (
      <ItemDetail props={props.props} />
  );
}

export default ItemDetailContainer;