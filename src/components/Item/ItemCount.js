import React, { useState } from 'react'
import './Item.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';

const ItemCount = (props) => {
    const {initial, stock} = props;
    const [amount, setAmout] = useState(initial);
    const [stockAvailable, setStockAvailable] = useState(stock);

    //Styles
    const styles = {
        fontSize:'18px',
        textAlign:"center",
        margin: "3%",
        padding: "1%"
    }
    const stylesCounter = {
        display: "flex",
        justifyContent:"center",
        alignItems:"baseline"
    }
    const stylesAmount = {width:"20%"}

    //Functions
    const onAdd = () => {
        if(amount < stockAvailable){
            setAmout(amount + 1)
        }
    }
    const onRemove = () => {
        if(amount > 0){
            setAmout(amount - 1)
        }
    }


    return(
        <div style={styles}>
            <div style={stylesCounter}>
                <Button variant="outline-secondary" onClick={()=>onRemove()}>-</Button>
                <p style={stylesAmount}>{amount}</p>
                <Button variant="outline-secondary" onClick={()=>onAdd()}>+</Button>
            </div>
            <Button variant="secondary">Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount;