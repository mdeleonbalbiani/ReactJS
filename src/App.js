import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Cart from './components/Cart/CartContext'

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/aboutUs">
            <AboutUs />
        </Route>
        <Route exact path="/cart">
            <Cart />
        </Route>
        <Route path='/:itemCategory' exact render= {routeProps =><ItemListContainer {...routeProps} key={document.location.href} />} />
      </Switch>
    </Router>
  );
}

export default App;
