import '../styles/Cart.css'
import { useCart } from '../context/useCart'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'



export default function Cart() {
    const { cart, deleteItemCart, totalPriceItem, resultadoTotal } = useCart()
    const navigate = useNavigate()


    if (cart.length === 0) {

        Swal.fire({
            icon: "info",
            title: "Oops...",
            text: "No tienes productos en el carrito!",
        });

    }

    const deleteItemAlert = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteItemCart(id)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div id="carrito">
            <h2 className="tituloCarrito"> Carrito de compras </h2>
            <ul id="lista-carrito">
                {cart.map(prod => (
                    <li key={prod.id}>
                        <div className='contenedorInfoCart'>
                            <span>{prod.locality} - {prod.home} X {prod.quantity}</span>
                            <span> price: ${totalPriceItem(prod.id)} </span>
                        </div>
                        <div className='contenedorButtonCart'>
                            <button id="cerrar-carrito" onClick={() => deleteItemAlert(prod.id)} className='deleteButton'> Borrar </button>
                        </div>
                    </li>
                ))}
            </ul>
            <h3> Total: ${resultadoTotal()} </h3>
            <div className="btnContenedorCarrito">
                <button onClick={() => navigate('/')} id="cerrar-carrito" className='buttonCarts'> Cerrar </button>
                <button onClick={() => navigate('/checkout')} id="checkout-carrito" className='buttonCarts'> Ir al checkout </button>
            </div>
        </div>
    )
}
