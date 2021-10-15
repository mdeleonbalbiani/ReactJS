import { createContext, useState } from "react";

export const CartCtxt = createContext();

const CartContext = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const newItem = cart.find(item=>item.id === product.id)
        if(newItem){
            const itemIndex = cart.indexOf(newItem)
            cart[itemIndex].quantity += product.quantity;
        }
        else{
            setCart([...cart, product]);
        }
    }

    const emptyCart = () => {
        if (window.confirm("¿Estó seguro que desea vaciar el carrito?")) {
            setCart([])
        }
    }

    const deleteItem = (id) => {
        const newCartList = cart.filter((item) => item.id !== id);
        setCart(newCartList);
    }

/*     const isInCart = (id, quantity) => {
        const newItem = cart.find(item=>item.id === id)
        if(newItem){
            const itemIndex = cart.indexOf(newItem)
            cart[itemIndex].quantity += quantity;
        }
    } */

    return (
        <CartCtxt.Provider value={ {cart, setCart, addToCart, emptyCart, deleteItem} }>
         {children}
        </CartCtxt.Provider>
    )
}
export default CartContext;