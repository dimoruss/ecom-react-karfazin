import React from 'react';
import Item from '../Item/Item';


const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((el)=>(<Item{...el}/>))}
        </div>
    );
}

export default ItemList;