import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';
import logo from '../assets/imgs/logo.png'
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="alignNavBarLogo">
                        <img src={logo} alt="Logo corporativo" width="35%"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto alignNavBar">
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href="">Sobre nosotros</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1" className="alignDropdown">Alimentación saludable</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" className="alignDropdown">Nutrición deportiva</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" className="alignDropdown">Ropa deportiva de mujer</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4" className="alignDropdown">Ropa deportiva de hombre</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget itemAmount="4"/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;