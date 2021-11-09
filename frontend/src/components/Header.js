import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
const userIcon = <FontAwesomeIcon icon={faUser} />;

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Navbar.Brand href="/">E-Mart</Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/cart" style={{ textDecoration: 'none' }}>
                                <Nav.Link>{cartIcon} Cart</Nav.Link>
                            </Link>
                            <Link
                                to="/login"
                                style={{ textDecoration: 'none' }}
                            >
                                <Nav.Link>{userIcon} Login</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
