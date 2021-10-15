import React from "react";
import '../Item/Item.css'
import { Badge } from "react-bootstrap";
import ItemCount from './ItemCount'

const ItemDetail = (props) => {
    const { id, title, description, price, pictureURL, stock} = props.props;

    const product = {
        id: id,
        title: title,
        stock: stock,
        initial: 1,
        precio: price,
    };

    return(
        <>
            <div className="details">
                <h2>{title}</h2>
                <img src={pictureURL} alt="Imagen del producto"/>
                <p className="itemDescription">{description}</p>
                <p className="detailsPrice" >Precio: ${price}</p>
                <span>
                    <Badge pill bg="success">Código: {id}</Badge>
                </span>
                <span>
                    <Badge pill bg="primary">Stock disponible: {stock}</Badge>
                </span>
                <ItemCount props={product}/>
            </div>
        </>
    )
}

export default ItemDetail;