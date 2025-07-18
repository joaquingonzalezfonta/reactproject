import { CartContext } from './CartContext'
import { useState } from 'react'

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart(prevCart => {
            const productInCart = prevCart.find(item => item.id === product.id);

            if (productInCart) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            } else {
                return [...prevCart, product];
            }
        });
    };

    const getQuantity = () => {
        const quantities = cart.map(prod => prod.quantity)
        const total = quantities.reduce((acc, current) => acc + current, 0)

        return total
    }

    const deleteItemCart = (id) => {
        setCart(cartPrev => cartPrev.filter(item => item.id !== id))
    }

    const deleteItemsCart = () => {
        setCart([]);
    }

    const totalPriceItem = (id) => {
        const item = cart.find(prod => prod.id === id)
        if (!item) return 0

        return item.price * item.quantity
    }

    const resultadoTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, getQuantity, deleteItemCart, totalPriceItem, resultadoTotal, deleteItemsCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider