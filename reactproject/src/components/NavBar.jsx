import '../styles/NavBar.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router'

function NavBar () {
    return (
        <>
            <nav className="navbar-container">
                <div className="navbar-sections">
                    <p> HomeBookstore </p>
                </div>
                <div className="navbar-sections">
                    <ul>
                        <li className="categories-sections">
                            <Link to={`/categorias/mar`}> Mar </Link>
                        </li>
                        <li className="categories-sections">
                            <Link to={`/categorias/lago`}> Lago </Link>
                        </li>
                        <li className="categories-sections">
                            <Link to={`/categorias/ciudad`}> Ciudad </Link>
                        </li>
                        <li className="categories-sections">
                            <Link to={`/categorias/montaña`}> Montaña </Link>
                        </li>
                        <li className="categories-sections">
                            <Link to={`/categorias/bosaque`}> Bosque </Link>
                        </li>
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