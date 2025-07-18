import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"
import '../styles/ItemCount.css'
import { ToastContainer, toast } from 'react-toastify';

export default function ItemCount({ item }) {
    const [counter, setCounter] = useState(0)
    const { addToCart } = useContext(CartContext)
    const handleAdd = () => setCounter(counter + 1)
    const handleSub = () => setCounter(counter - 1)
    const handleAddToCart = () => addToCart({ ...item, quantity: counter })
    const notify = () => toast.success('Agregado!', {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    return (
        <>
            <div className="counter">
                <div className="itemCounterContainer">
                    <p className="itemCounter" > {counter} </p>
                </div>
            </div>
            <div className="counter">
                <div>
                    <button className="buttonAdd" onClick={handleAdd}>
                        <p className="itemCounter"> + </p>
                    </button>
                    <button className="buttonSub" onClick={handleSub}>
                        <p className="itemCounter"> - </p>
                    </button>
                </div>
                <div className="buttonCardContainerDetail">
                    <button className='buttonCardDetail'
                        onClick={() => {
                            handleAddToCart();
                            notify();
                        }}
                        disabled={counter <= 0}> Agregar al carrito </button>
                    <ToastContainer />
                </div>
            </div>

        </>
    )
}
