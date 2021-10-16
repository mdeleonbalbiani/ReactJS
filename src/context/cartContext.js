import { createContext, useState } from "react";

export const CartCtxt = createContext();

const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (product) => {
        const productToAdd = {
            id:product.id,
            title:product.title,
            quantity:product.quantity,
            pictureURL:product.pictureURL,
            price:(product.price*product.quantity)
        }
        const newItem = cart.find(item=>item.id === product.id);

        if(newItem){
            const itemIndex = cart.indexOf(newItem)
            cart[itemIndex].quantity += product.quantity;
            cart[itemIndex].price = product.price * cart[itemIndex].quantity;
        }
        else{
            setCart([...cart, productToAdd]);
            setTotalItems(totalItems + 1);
        }
        setTotalPrice(totalPrice + productToAdd.price);
    }

    const emptyCart = () => {
        if (window.confirm("¿Estó seguro que desea vaciar el carrito?")) {
            setCart([]);
            setTotalItems(0);
        }
    }

    const deleteItem = (id, price, quantity) => {
        const newCartList = cart.filter((item) => item.id !== id);
        setCart(newCartList);
        setTotalItems(totalItems - 1);
        const priceToSubtract = price * quantity;
        setTotalPrice(totalPrice - priceToSubtract);
    }

    return (
        <CartCtxt.Provider value={ {cart, setCart, addToCart, emptyCart, deleteItem, totalItems, totalPrice} }>
         {children}
        </CartCtxt.Provider>
    )
}
export default CartContext;