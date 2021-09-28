import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = () => {
    return( 
    <div>
        <ItemCount initial={1} stock={20}/>
    </div>
    )
}

export default ItemListContainer;