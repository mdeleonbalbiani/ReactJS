import React from "react";
import { Badge, Button } from "react-bootstrap";
import ItemCount from './ItemCount'
import { Link } from "react-router-dom";

const ItemDetail = (props) => {
    const { id, title, description, price, pictureURL, stock, category} = props.props;

    const product = {
        id: id,
        title: title,
        pictureURL: pictureURL,
        stock: stock,
        initial: 1,
        precio: price,
    };

    return(
        <>
            <div className="details container">
                <img src={pictureURL} alt="Imagen del producto"/>
                <div className="details-info">
                    <h2>{title}</h2>
                    <p className="itemDescription">{description}</p>
                    <div className="details-toCart">
                        <p className="detailsPrice" >Precio: ${price}</p>
                        <span>
                            <Badge pill bg="success">Código: {id}</Badge>
                        </span>
                        <span>
                            <Badge pill bg="primary">Stock disponible: {stock}</Badge>
                        </span>
                        <ItemCount props={product}/>
                        <Link to={`/category/${category}`}>
                            <Button variant="outline-dark" className="buttonBackToShop">Volver a la tienda</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;