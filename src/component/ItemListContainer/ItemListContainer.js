import React, { } from "react";
import ItemCount from "../ItemCount/ItemCount";


const ItemListContainer = ({greeting}) => {
    function onAddCallback(n) {
        alert(`agregados al carrito ${n} productos`);
    }
    return (
        <div>
            {greeting}
            <ItemCount stock={5} initial={1} onAdd={onAddCallback}/>
        </div>
        )
    }

export default ItemListContainer;