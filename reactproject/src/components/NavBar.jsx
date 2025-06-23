import '../styles/NavBar.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router'
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import { useEffect, useState } from 'react';

function NavBar() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            const uniqueCategories = [...new Set(data.products.map(product => product.category))];
            setCategories(uniqueCategories);
        });
}, []);
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
                            {categories.map(cat => (
                                <Dropdown.Item as={Link} to={`/category/${cat}`} key={cat}>
                                    {cat}
                                </Dropdown.Item>
                            ))}
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