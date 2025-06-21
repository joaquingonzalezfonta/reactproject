import '../styles/NavBar.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router'

function NavBar () {
    return (
        <>
            <nav className="navbar-container">
                <div className="navbar-sections">
                    <p>
                        <Link to='/' className='linkSections'> HomeBookstore </Link>
                    </p>
                </div>
                <div className="navbar-sections">
                    <ul className='listContainer'>
                        <li className="categories-sections">
                            <Link to='/Mar' className='linkSections'> Mar </Link>
                        </li>
                        <li className="categories-sections">
                            <Link to='/Lago' className='linkSections'> Lago </Link>
                        </li>
                        <li className="categories-sections">
                            <Link to='/Ciudad' className='linkSections'> Ciudad </Link>
                        </li>
                        <li className="categories-sections">
                            <Link to='/Montaña' className='linkSections'> Montaña </Link>
                        </li>
                        <li className="categories-sections">
                            <Link to='/Bosque' className='linkSections'> Bosque </Link>
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