import React from "react";
import './Item.css'
import ItemDetail from "./ItemDetail";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

const ItemDetailContainer = (props) => {
  const {title} = props.props;

  return (
      <Router>
        <Link to={`/${title}`} >Ver Detalle</Link>

        <Switch>
            <Route path="/:title">
              <ItemDetail props={props.props} />
            </Route>
        </Switch>
      </Router>
  );
}

export default ItemDetailContainer;