import React from "react";
import '../Item/Item.css'
import { Badge } from "react-bootstrap";
import ItemCount from './ItemCount'

const ItemDetail = (props) => {
    const {id, title, price, description, pictureURL, stock} = props.props;
    
    return(
        <>
            <div className="details">
                <h2>{title}</h2>
                <img src={pictureURL} alt="Imagen del producto"/>
                <p>{description}</p>
                <p className="detailsPrice" >Precio: ${price}</p>
                <span style={{ textAlign: "center" }}>
                    <Badge pill bg="success">Código: {id}</Badge>
                </span>
                <span>
                    <Badge pill bg="primary">Stock disponible: {stock}</Badge>
                </span>
                <ItemCount initial={1} stock={stock}/>
            </div>
        </>
    )
}

export default ItemDetail;