import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Item/ItemListContainer';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Cart from './components/Cart/Cart'
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import CartContext from './context/cartContext';

function App() {
  return (
    <CartContext>
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

          <Route path="/category/nutrition">
              <ItemListContainer itemCategory="nutrition"/>
          </Route>
          <Route path="/category/food">
              <ItemListContainer itemCategory="food"/>
          </Route>
          <Route path="/category/nutrition/:id">
              <ItemDetailContainer/>
          </Route>
          <Route path="/category/food/:id">
              <ItemDetailContainer/>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </CartContext>
  );
}

export default App;
