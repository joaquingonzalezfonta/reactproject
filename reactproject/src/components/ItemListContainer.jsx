import '../styles/ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router';

function ItemListContainer({ text }) {
    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {

        if (categoryName) {
            fetch(`https://dummyjson.com/products/category/${categoryName}`)
                .then(res => res.json())
                .then(res => setItems(res.products))
        } else {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(data => setItems(data.products))
        }

    }, [categoryName])

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