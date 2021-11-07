import { createContext, useState } from "react";
import swal from "sweetalert";

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
        }
        setTotalPrice(totalPrice + productToAdd.price);
        setTotalItems(totalItems + productToAdd.quantity);
    }

    const emptyCart = () => {
        swal({
            title: "Vaciar el carrito",
            text: "¿Estó seguro que desea vaciar el carrito?",
            icon: "warning",
            buttons: ["No", "Si"]
        }).then((respuesta)=>{
            if (respuesta) {
                setCart([]);
                setTotalItems(0);
                setTotalPrice(0)
            }
        })
    }

    const deleteItem = (id, price, quantity) => {
        const newCartList = cart.filter((item) => item.id !== id);
        setCart(newCartList);
        setTotalItems(totalItems - quantity);
        setTotalPrice(totalPrice - price);
    }
    

    return (
        <CartCtxt.Provider value={ {cart, setCart, addToCart, emptyCart, deleteItem, totalItems, totalPrice, setTotalPrice, setTotalItems} }>
         {children}
        </CartCtxt.Provider>
    )
}
export default CartContext;