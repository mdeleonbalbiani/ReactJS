import React, {useContext} from "react";
import { CartCtxt } from "../../context/cartContext";
import { ImCross } from "../../../node_modules/react-icons/im";
import '../Styles.css'
import { Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, emptyCart, deleteItem } = useContext(CartCtxt);

    return (
        <>
            <h2>Tu carrito</h2>
            {cart.length ? (
                cart.map((item, index) => {
                    return(
                        <div className="cartItem">
                            <div key={index} className="cartDetail">
                                <img src={item.pictureURL} alt="Imagen del producto" className="cartImg"/>
                                <div>
                                    <h2>{item.title}</h2>
                                    <span>
                                        <Badge pill bg="success">Código: {item.id}</Badge>
                                    </span>
                                    <h3>Cantidad: {item.quantity}</h3>
                                </div>
                            </div>
                            <p className="cartCross" onClick={()=>{deleteItem(item.id)}}>
                                <ImCross/>
                            </p>
                        </div>
                    )
                })
            ):(
                <h2>No hay elementos es su carrito</h2>
            )}

            {cart.length ? (
                <div className="cartButtonContainer">
                    <Button className="cartButton cartButtonFinish">
                        Finalizar compra
                    </Button>
                    <Button  className="cartButton" onClick={emptyCart}> 
                        Vaciar carrito 
                    </Button>
                </div>  
            ):(
                <div className="backToHome">
                    <Link to="/" className="backToHomeButton">Ir al home</Link>
                </div>
            )
            }
            
        </>
    )
}

export default Cart;