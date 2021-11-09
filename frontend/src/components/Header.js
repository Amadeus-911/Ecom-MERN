import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
const userIcon = <FontAwesomeIcon icon={faUser} />;

const Header = () => {
    return (
        <header>
            <Navbar bg="black" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">E-Mart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/cart">{cartIcon} Cart</Nav.Link>
                            <Nav.Link href="/login">{userIcon} Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
