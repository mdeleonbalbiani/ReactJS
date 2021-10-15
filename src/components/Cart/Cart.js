import React, {useContext} from "react";
import { CartCtxt } from "../../context/cartContext";
import { ImCross } from "../../../node_modules/react-icons/im"

const Cart = () => {

    const { cart, emptyCart, deleteItem } = useContext(CartCtxt);

    return (
        <>
            <h2>Tu carrito</h2>
            {cart.length ? (
                cart.map((item, index) => {
                    return(
                        <>
                        <div key={index}>
                            <h1>{item.id}</h1>
                            <h2>{item.title}</h2>
                            <h3>{item.quantity}</h3>
                        </div>
                        <button onClick={()=>{deleteItem(item.id)}}>
                            <ImCross/>
                        </button>
                        </>
                    )
                })
            ):(
                <h2>No hay elementos es su carrito</h2>
            )
            }
            <button onClick={emptyCart}> Vaciar carrito </button>
        </>
    )
}

export default Cart;