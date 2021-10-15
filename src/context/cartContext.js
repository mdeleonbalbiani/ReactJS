import { createContext, useState } from "react";

export const CartCtxt = createContext();

const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);

    const addToCart = (product) => {
        const newItem = cart.find(item=>item.id === product.id)
        if(newItem){
            const itemIndex = cart.indexOf(newItem)
            cart[itemIndex].quantity += product.quantity;
        }
        else{
            setCart([...cart, product]);
            setTotalItems(totalItems + 1);
        }
    }

    const emptyCart = () => {
        if (window.confirm("¿Estó seguro que desea vaciar el carrito?")) {
            setCart([]);
            setTotalItems(0)
        }
    }

    const deleteItem = (id) => {
        const newCartList = cart.filter((item) => item.id !== id);
        setCart(newCartList);
        setTotalItems(totalItems - 1)
    }

    return (
        <CartCtxt.Provider value={ {cart, setCart, addToCart, emptyCart, deleteItem, totalItems} }>
         {children}
        </CartCtxt.Provider>
    )
}
export default CartContext;