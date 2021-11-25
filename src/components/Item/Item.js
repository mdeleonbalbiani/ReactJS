import React from 'react'
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = (props) => {
    const { id, title, price, pictureURL, stock } = props.props;

    return (
        <div className="col-sm-6 col-md-3">
          <Card className="card">
              <Card.Img variant="top" src={pictureURL} className="cardImage" />
              <Card.Body className="cardBody">
              <Card.Title className="cardTitle">{title}</Card.Title>
              <Card.Text>
                <span style={ {textAlign: "center"} }>
                  <Badge pill bg="success">Código: {id}</Badge>
                </span>
                <span>
                <Badge pill bg="primary">Stock disponible: {stock}</Badge>
                </span>
                <span className="cardPrice"> Precio: ${price} </span>
                <Link
                  to={`/item/${id}`}
                  className="cardButton"
                >
                  Ver detalle
                </Link>
              </Card.Text>
              </Card.Body>
          </Card>
        </div>
        
      );
}

export default Item;