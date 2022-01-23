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
import Checkout from './components/Checkout/checkout';
import NotFound from './components/404/notFound';

function App() {
  return (
    <CartContext>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/ReactJS/">
              <Home />
          </Route>
          <Route exact path="/ReactJS/aboutUs">
              <AboutUs />
          </Route>
          <Route exact path="/ReactJS/cart">
              <Cart />
          </Route>
          <Route path="/ReactJS/category/nutrition">
              <ItemListContainer itemCategory="nutrition"/>
          </Route>
          <Route path="/ReactJS/category/food">
              <ItemListContainer itemCategory="food"/>
          </Route>
          <Route exact path="/ReactJS/item/:id" component={ ItemDetailContainer } />
          <Route path="/ReactJS/finishPurchase">
              <Checkout />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      <Footer />
      </Router>
    </CartContext>
  );
}

export default App;