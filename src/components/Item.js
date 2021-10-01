import React from 'react'
import { Card, Badge } from "react-bootstrap";
import ItemCount from './ItemCount';

const Item = (props) => {
    const { id, title, price, pictureURL, stock } = props.props;
    
    const styles = {
        margin:"5%",
        textAlign:"center"
    }
    const imageStyle = {
      width:"30%",
      display:"block",
      margin:"auto"
    }
    const priceStyle = {
      fontSize:"18px",
      fontWeight:"bold"
    }

    return (
        <div className="col-sm-6 col-md-3">
          <Card style={styles}>
            <Card.Img variant="top" src={pictureURL} style={imageStyle} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                <span style={{ textAlign: "center" }}>
                  <Badge pill bg="success">Código: {id}</Badge>
                </span>
                <span>
                <Badge pill bg="primary">Stock disponible: {stock}</Badge>
                </span>
                <span>
                  <p style={priceStyle}>Precio: ${price}</p>
                </span>
              </Card.Text>
              <ItemCount initial={1} stock={stock}/>
            </Card.Body>
          </Card>
        </div>
      );
}

export default Item;