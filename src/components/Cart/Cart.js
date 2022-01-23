import React, {useContext} from "react";
import { CartCtxt } from "../../context/cartContext";
import { ImCross } from "../../../node_modules/react-icons/im";
import '../Styles.css'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, emptyCart, deleteItem, totalPrice } = useContext(CartCtxt);

    return (
        <>
            <h1>Tu carrito</h1>
            {cart.length ? (
                cart.map((item, index) => {
                    return(
                        <div  key={index} className="cartItem">
                            <div className="cartDetail">
                                <img src={item.pictureURL} alt="Imagen del producto" className="cartImg"/>
                                <div>
                                    <h2 className="cartTitle">{item.title}</h2>
                                    <div className="cartInfo">
                                        <h3>Cantidad: {item.quantity}</h3>
                                        <h4>Precio: ${item.price}</h4>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="cartCross" onClick={()=>{deleteItem(item.id, item.price, item.quantity)}}>
                                    <ImCross/>
                                </p>
                            </div>
                        </div>
                    )
                })
            ):(
                <h2>No hay elementos es su carrito</h2>
            )}

            {cart.length ? (
                <div>
                    <div className="totalPrice">
                        <h4 className="totalPriceNumber">Total: ${totalPrice}</h4>
                    </div>
                    <div className="cartButtonContainer">
                        <Link to="/ReactJS/finishPurchase" className="cartButton cartButtonFinish btn">
                            Finalizar compra
                        </Link>
                        <Button  className="cartButton" onClick={emptyCart}> 
                            Vaciar carrito 
                        </Button>
                    </div>  
                </div>
            ):(
                <div className="backToHome">
                    <Link to="/ReactJS/" className="backToHomeButton">Ir al home</Link>
                </div>
            )
            }
            
        </>
    )
}

export default Cart;