import '../styles/ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';

function ItemListContainer ({text}) {
    const [ items, setItems ] = useState([])

    useEffect(() => {
        
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setItems(data.products))
    }, [])
    return (
        <>
            <h1 className='principalTitle'> {text} </h1>
            <div className="cardsContainer">
                <ItemList items={items} />
            </div>

        </>
    )
}

export default ItemListContainer