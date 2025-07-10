import '../styles/NavBar.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router'
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

function NavBar() {

    return (
        <>
            <nav className="navbar-container">
                <div className="navbar-sections">
                    <p>
                        <Link to='/' className='linkSections'> HomeBookstore </Link>
                    </p>
                </div>
                <div className="navbar-sections">

                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink}> Categorias </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {/* {categories.map(cat => (
                                <Dropdown.Item as={Link} to={`/category/${cat}`} key={cat}>
                                    {cat}
                                </Dropdown.Item>
                            ))} */}
                            <Dropdown.Item as={Link} to={`/category/bosque`}>
                                Bosque
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to={`/category/montaña`}>
                                Montaña
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to={`/category/ciudad`}>
                                Ciudad
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to={`/category/mar`}>
                                Mar
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to={`/category/lago`}>
                                Lago
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="navbar-sections">
                    <CartWidget />
                </div>
            </nav>
        </>
    )
}

export default NavBar