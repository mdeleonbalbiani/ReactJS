import React from 'react'
import { Card, Badge } from "react-bootstrap";
import ItemCount from './ItemCount';
import ItemDetailContainer from './ItemDetailContainer';
import './Item.css'

const Item = (props) => {
    const { id, category, title, price, pictureURL, stock } = props.props;

    return (
        <div className="col-sm-6 col-md-3">
          <Card className="card">
            <Card.Img className="cardImage" variant="top" src={pictureURL} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                <span style={{ textAlign: "center" }}>
                  <Badge pill bg="success">Código: {id}</Badge>
                </span>
                <span>
                <Badge pill bg="primary">Stock disponible: {stock}</Badge>
                </span>
                <ItemDetailContainer props={props.props} />
                <span>
                  <p className="cardPrice">Precio: ${price}</p>
                </span>
              </Card.Text>
              <ItemCount initial={1} stock={stock}/>
            </Card.Body>
          </Card>
        </div>
      );
}

export default Item;