import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Checkout() {

    const handleSubmit = (evt) => {
        evt.preventDefault()
    }
    return (
        <div className='d-flex justify-content-center mt-5'>
            <Form className='w-60 border p-3 rounded' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Juan Perez" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="celular">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control type="number" placeholder="+432427543" required/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Finzalizar compra
                </Button>
            </Form>
        </div>
    )
}
