import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail';
import { getItem } from '../firebase/db';

export default function ItemDetailContainer() {
    const [item, setItem] = useState()
    const { id } = useParams()

    useEffect(() => {
        getItem(id).then(res => setItem(res))
    }, [id])

    return (
        <ItemDetail item={item} />
    )
}
