import '../styles/NavBar.css'
import CartWidget from './CartWidget'

function NavBar () {
    return (
        <>
            <nav className="navbar-container">
                <div className="navbar-sections">
                    <p> HomesLibrary </p>
                </div>
                <div className="navbar-sections">
                    <ul>
                        <li className="categories-sections">Montaña</li>
                        <li className="categories-sections">Mar</li>
                        <li className="categories-sections">Ciudad</li>
                        <li className="categories-sections">Lago</li>
                        <li className="categories-sections">Bosque</li>
                    </ul>
                </div>
                <div className="navbar-sections">
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}

export default NavBar