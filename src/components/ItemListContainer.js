import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = () => {
    return( 
    <>
        <ItemCount productName="ENA Whey Protein True Made 2lb - Vainilla" initial={1} stock={20}/>
    </>
    )
}

export default ItemListContainer;