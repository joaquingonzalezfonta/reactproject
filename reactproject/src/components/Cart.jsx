import '../styles/Cart.css'
import { useCart } from '../context/useCart'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'



export default function Cart() {
    const { cart, deleteItemCart } = useCart()
    const navigate = useNavigate()


    if (cart.length === 0) {

        Swal.fire({
            icon: "info",
            title: "Oops...",
            text: "No tienes productos en el carrito!",
        });

    }

    return (
        <div id="carrito">
            <h2 className="tituloCarrito"> Carrito de compras </h2>
            <ul id="lista-carrito">
                {cart.map(prod => (
                    <li key={prod.id}>
                        {prod.locality} - {prod.home} X {prod.quantity}
                        <button id="cerrar-carrito" onClick={() => deleteItemCart(prod.id)} className='deleteButton'> Borrar </button>
                    </li>
                ))}
            </ul>
            <h3> Total: $12000000 </h3>
            <div className="btnContenedorCarrito">
                <button onClick={() => navigate('/')} id="cerrar-carrito" className='buttonCarts'> Cerrar </button>
                <button onClick={() => navigate('/checkout')} id="checkout-carrito" className='buttonCarts'> Ir al checkout </button>
            </div>
        </div>
    )
}
