import React, { useState } from 'react'
import './Item.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemCount = (props) => {
    const {stock, initial, onAdd, productCart, id, title} = props.props;

    const [quantity, setQuantity] = useState(initial);
    const [stockAvailable, setStockAvailable] = useState(stock);
    const [cartList, setCartList] = useState(productCart);
    const [estado, setEstado] = useState(true);

    //Functions
    const add = () => {
        if(quantity < stockAvailable){
            setQuantity(quantity + 1)
        }
    }
    const remove = () => {
        if(quantity > 0){
            setQuantity(quantity - 1)
        }
    }

    const addToCart = () => {
        const newProduct = {
            "id":id,
            "title":title,
            "quantity":quantity
        }
        setCartList([...cartList, newProduct]);
        onAdd(stockAvailable, quantity);
        setEstado(false);
    }

    console.log(cartList);


    return(
        (estado) ? (
            <div className="counterContainerStyle">
                <div className="counterStyle">
                    <Button variant="outline-secondary" onClick={()=>remove()}>-</Button>
                    <p className="quantitySytle">{quantity}</p>
                    <Button variant="outline-secondary" onClick={()=>add()}>+</Button>
                </div>
                <Button variant="secondary" className="addToCart" onClick={() => addToCart()}>
                    Agregar al carrito
                </Button>
            </div>
        ) : (
            <div className="finishBuying">
                <Link to="/cart" className="finishBuyingButton">Finalizar compra</Link>
            </div>
        )
    )
}

export default ItemCount;