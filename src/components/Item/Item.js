import React from 'react'
import './Item.css'
import { Card, Badge } from "react-bootstrap";
import ItemDetailContainer from './ItemDetailContainer';
import { BrowserRouter as Router, Switch, Link, Route, useRouteMatch} from "react-router-dom";

const Item = (props) => {
    const { id, title, price, pictureURL, stock, items } = props.props;
    let { path, url } = useRouteMatch();

    return (
      <Router>
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
                <Link to={`${url}/product/${id}`} className="cardButton">Ver Detalle</Link>
              </Card.Text>
              </Card.Body>
          </Card>
        </div>

        <Switch>
          <Route path={`${path}/product/:id`} children={<ItemDetailContainer />} />
        </Switch>
      </Router>
        
      );
}

export default Item;