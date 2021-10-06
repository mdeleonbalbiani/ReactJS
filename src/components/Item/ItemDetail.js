import React from "react";
import '../Item/Item.css'
import { Badge } from "react-bootstrap";

const ItemDetail = (props) => {
    const {id, title, price, description, pictureURL, stock} = props.props;

    const styles = {
        textAlign:"center"
    }
    const stylesPrice = {
        fontSize:"20px",
        fontWeight:"bold"
    }

    return(
        <>
            <div style={styles}>
                <h2>{title}</h2>
                <img src={pictureURL} alt="Imagen del producto"/>
                <p>{description}</p>
                <p style={stylesPrice}>Precio: ${price}</p>
                <span style={{ textAlign: "center" }}>
                    <Badge pill bg="success">Código: {id}</Badge>
                </span>
                <span>
                    <Badge pill bg="primary">Stock disponible: {stock}</Badge>
                </span>
            </div>
        </>
    )
}

export default ItemDetail;