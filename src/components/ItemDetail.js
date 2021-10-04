import React from "react";
import { Modal, Badge } from "react-bootstrap";

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
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={styles}>
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
        </Modal.Body>
        </>
    )
}

export default ItemDetail;