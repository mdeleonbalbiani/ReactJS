import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from '../Cart/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <nav className="navbar">
                <Link to="/">
                    <img src="https://res.cloudinary.com/dus99ir1n/image/upload/v1633443235/GlanGlow/granGlowLogo_hhtzit.png" alt="Logo corporativo" className="nav-logo"/>
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/aboutUs" className="nav-link">Sobre nosotros</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/nutrition" className="nav-link">Nutrición deportiva</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/food" className="nav-link">Alimentación saludable</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cart" className="nav-link">
                            <CartWidget itemAmount="4"/>
                        </Link>
                    </li>
                </ul>
                <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            </nav>
        </header>
    )
}



export default NavBar;

