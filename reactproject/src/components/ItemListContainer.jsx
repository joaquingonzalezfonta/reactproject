import '../styles/ItemListContainer.css';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router';
import { getItems, getItemsByCategory } from '../firebase/db';

function ItemListContainer({ text }) {
    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    useEffect(() => {
        if (categoryName) {
            getItemsByCategory(categoryName).then(res => setItems(res))

        } else {
            getItems().then(res => setItems(res))

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