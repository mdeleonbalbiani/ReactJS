import React, { useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartCtxt } from '../../context/cartContext';

const ItemCount = (props) => {
    const {stock, initial, id, title, pictureURL, precio} = props.props;

    const [quantity, setQuantity] = useState(initial);
    const [estado, setEstado] = useState(true);

    const {addToCart} = useContext(CartCtxt);

    //Functions
    const add = () => {
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }
    const remove = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    const productToBuy = {
        id:id,
        title:title,
        quantity:quantity,
        pictureURL:pictureURL,
        price:precio
    }

    return(
        (estado) ? (
            <div className="counterContainerStyle">
                <div className="counterStyle">
                    <Button variant="outline-secondary" onClick={remove}>-</Button>
                    <p className="quantitySytle">{quantity}</p>
                    <Button variant="outline-secondary" onClick={add}>+</Button>
                </div>
                <Button variant="secondary" className="addToCart" onClick={() => {addToCart(productToBuy); setEstado(false)} }>
                    Agregar al carrito
                </Button>
            </div>
        ) : (
            <div className="finishBuying">
                <Link to="/ReactJS/cart" className="finishBuyingButton">Finalizar compra</Link>
            </div>
        )
    )
}

export default ItemCount;