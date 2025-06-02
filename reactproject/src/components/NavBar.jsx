import '../styles/NavBar.css'
import CartWidget from './CartWidget'

function NavBar () {
    return (
        <>
            <div className="navbar-container">
                <div className="navbar-sections">
                    <p> HomesLibrary </p>
                </div>
                <div className="navbar-sections">
                    <div className="categories-sections">Montaña</div>
                    <div className="categories-sections">Mar</div>
                    <div className="categories-sections">Ciudad</div>
                    <div className="categories-sections">Lago</div>
                    <div className="categories-sections">Bosque</div>
                </div>
                <div className="navbar-sections">
                    <CartWidget />
                </div>
            </div>
        </>
    )
}

export default NavBar