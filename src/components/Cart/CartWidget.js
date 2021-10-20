import React, { useContext } from 'react'
import { IoCartOutline } from '../../../node_modules/react-icons/io5';
import { CartCtxt  } from '../../context/cartContext';

const CartWidget = () => {
    const { totalItems } = useContext(CartCtxt);

    return(
        <>
            {totalItems!==0 ? (
                    <div className="cartWidgetContainer">
                        <IoCartOutline className="cartIcon" />
                        <p className="cartItemAmount"> {totalItems} </p>
                    </div>
                ):(
                    <div className="cartWidgetContainer">
                        <IoCartOutline className="cartIcon" />
                    </div>
                )
            }
        </>)
}

export default CartWidget;