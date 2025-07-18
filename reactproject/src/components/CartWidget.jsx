import '../styles/CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router'

function CartWidget() {
    const { getQuantity } = useContext(CartContext)
    const quantity = getQuantity()
    const navigate = useNavigate()
    return (
        <>
            <button className='buttonCartNavBar' onClick={() => navigate('/cart')}>
                <div className="widget-container">
                    <div className="widget">
                        🛒
                    </div>
                    <div className="widget-number">
                        <p> {quantity}</p>
                    </div>
                </div>
            </button>
        </>
    )
}

export default CartWidget 