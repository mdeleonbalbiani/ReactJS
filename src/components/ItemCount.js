import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'react-bootstrap';

const ItemCount = (props) => {
    const {initial, stock} = props;
    let [amount, setAmout] = useState(initial);
    const [stockAvailable, setStockAvailable] = useState(stock);

    //Styles
    const styles = {
        width:"20%",
        color:"white",
        fontSize:'18px',
        border: "1px solid white",
        textAlign:"center",
        margin: "3%",
        padding: "1%"
    }
    const stylesCounter = {
        display: "flex",
        justifyContent:"center",
        alignItems:"baseline"
    }
    const stylesAmount = {width:"20%",}

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
    const increaseToMax = () => {
        setAmout(amount = stockAvailable)
    }
    const decreaseToMin = () => {
        setAmout(amount = 0)
    }


    return(
        <div style={styles}>
            <p>ENA Whey Protein True Made 2lb - Vainilla</p>
            <div style={stylesCounter}>
                <Button variant="outline-secondary" onClick={()=>decreaseToMin()}>Min</Button>
                <Button variant="outline-secondary" onClick={()=>onRemove()}>-</Button>
                <p style={stylesAmount}>{amount}</p>
                <Button variant="outline-secondary" onClick={()=>onAdd()}>+</Button>
                <Button variant="outline-secondary" onClick={()=>increaseToMax()}>Max</Button>
            </div>
            <Button variant="secondary">Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount;