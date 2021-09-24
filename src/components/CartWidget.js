import React from 'react'
import { IoCartOutline } from '../../node_modules/react-icons/io5';

const CartWidget = (props) => {
    const {itemAmount} = props;
    const stylesContainer = {display: "flex"}
    const stylesIcon = {fontSize:'35px'}
    const stylesItemAmount = {fontSize:'20px'}
    return(
    <div style={stylesContainer}>
        <IoCartOutline style={stylesIcon}/>
        <p style={stylesItemAmount}> {itemAmount} </p>
    </div>)
}

export default CartWidget;