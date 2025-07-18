import React from 'react'
import Item from './Item'
import '../styles/ItemListContainer.css';

function ItemList({ items }) {
    return (
        <>
            <div className='cardsContainer'>
                {items.map(item => (<Item key={item.id} item={item} />))}
            </div>
        </>
    )
}

export default ItemList
