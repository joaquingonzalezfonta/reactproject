import '../styles/Cart.css'
import { useCart } from '../context/useCart'
import { Link } from 'react-router'


export default function Cart() {
    const { cart, deleteItemCart } = useCart()


    if (cart.length === 0) {
        return (
            <h2> No tienes productos en el carrito </h2>
        )
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
                    <Link to='/' className='linkCerrarCart'> 
                        <button id="cerrar-carrito"> Cerrar </button>
                    </Link>
            </div>
        </div>
    )
}
