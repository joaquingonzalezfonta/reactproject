import '../styles/NavBar.css'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router'
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';

function NavBar() {

    return (
        <>
            <nav className="navbar-container">
                <div className="navbar-sections">
                    <p>
                        <NavLink to='/' className='linkSections'> HomeBookstore </NavLink>
                    </p>
                </div>
                <div className="navbar-sections">

                    <Dropdown className='categoriasNavBar' as={NavItem}>
                        <Dropdown.Toggle className='linkSections' as={NavLink}> Categorias </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item as={NavLink} to={`/category/bosque`}>
                                Bosque
                            </Dropdown.Item>
                            <Dropdown.Item as={NavLink} to={`/category/montaña`}>
                                Montaña
                            </Dropdown.Item>
                            <Dropdown.Item as={NavLink} to={`/category/ciudad`}>
                                Ciudad
                            </Dropdown.Item>
                            <Dropdown.Item as={NavLink} to={`/category/mar`}>
                                Mar
                            </Dropdown.Item>
                            <Dropdown.Item as={NavLink} to={`/category/lago`}>
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