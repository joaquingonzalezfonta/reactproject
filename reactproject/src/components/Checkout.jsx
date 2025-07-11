import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useCart} from '../context/useCart'
import { serverTimestamp } from 'firebase/firestore';
import { createOrder } from '../firebase/db';
import '../styles/Checkout.css'

export default function Checkout() {

    const {cart} = useCart()

    const handleSubmit = (evt) => {
        evt.preventDefault()

        const form = evt.target 
        const email = form.email.value
        const nombre = form.nombre.value
        const celular = form.celular.value
        
        const order = {
            user: { email, nombre, celular },
            items: cart,
            time: serverTimestamp()
        }

        createOrder(order)
    }

    return (
        <div className='d-flex justify-content-center mt-5'>
            <Form className='formCheckout' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Joaquin Gonzalez" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="celular">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control type="text" placeholder="+432427543" required/>
                </Form.Group>
                
                <Button variant="primary" className='buttonForm' type="submit">
                    Finzalizar compra
                </Button>
            </Form>
        </div>
    )
}
