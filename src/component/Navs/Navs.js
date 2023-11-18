import React from 'react'
import './Navs.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../logo.png'
const Navs = () => {
    return (

        <Navbar expand="lg" sticky='top' >
            <Container className=''>
                <Navbar.Brand href="/#"><img src={logo} style={{ width: "120px", height: "50px" }} /></Navbar.Brand>
                <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="\">Home</Nav.Link>
                        <Nav.Link href="\about">About Us</Nav.Link>
                        <Nav.Link href="\food">Explore Food</Nav.Link>
                        <Nav.Link href="\review">Review</Nav.Link>
                        <Nav.Link href="\faq">Faq</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className='last-nav'>2419799</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Navs
