import React, { useContext } from 'react'
import { IoCartOutline } from '../../../node_modules/react-icons/io5';
import { CartCtxt  } from '../../context/cartContext';

const CartWidget = () => {
    const { totalItems } = useContext(CartCtxt);

    const stylesContainer = {display: "flex"}
    const stylesIcon = {fontSize:'35px'}
    const stylesItemAmount = {fontSize:'20px'}
    return(
    <div style={stylesContainer}>
        <IoCartOutline style={stylesIcon}/>
        <p style={stylesItemAmount}> {totalItems} </p>
    </div>)
}

export default CartWidget;