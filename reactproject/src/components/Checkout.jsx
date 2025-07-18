import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCart } from '../context/useCart'
import { serverTimestamp } from 'firebase/firestore';
import { createOrder } from '../firebase/db';
import '../styles/Checkout.css'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

export default function Checkout() {

    const { cart, deleteItemsCart } = useCart()
    const navigate = useNavigate()

    const handleSubmit = (evt) => {
        evt.preventDefault()

        const form = evt.target
        const email = form.email.value
        const nombre = form.nombre.value
        const celular = form.celular.value

        const orderData = {
            user: { email, nombre, celular },
            items: cart,
            time: serverTimestamp()
        }

        feedbacKPagoExitoso(orderData)
    }

    const feedbacKPagoExitoso = async (orderData) => {
        try {
            const orderId = await createOrder(orderData);

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Orden creada exitosamente",
                text: `Tu ID de orden es: ${orderId}`,
                showConfirmButton: false,
                timer: 5000
            }).then(() => {
                navigate('/');
                deleteItemsCart();
            });

        } catch (error) {
            console.error('Error al crear la orden:', error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "No se pudo crear la orden. Intenta nuevamente."
            });
        }
    };

    return (
        <div className='d-flex justify-content-center mt-5'>
            <Form className='formCheckout' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Joaquin Gonzalez" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="celular">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control type="text" placeholder="+432427543" required />
                </Form.Group>

                <Button variant="primary" className='buttonForm' type="submit">
                    Finzalizar compra
                </Button>
            </Form>
        </div>
    )
}
