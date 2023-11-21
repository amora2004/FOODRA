import React, { useState } from 'react'
import './Navs.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../logo.png'
import { Link } from 'react-router-dom';
const Navs = () => {

    const info = [
        { link: '/', text: "Home" },
        { link: '/about', text: "About Us", },
        { link: "/food", text: "Explore Food" },
        { link: "/review", text: "Review" },
        { link: "/faq", text: "Faq" }

    ]
    const [activeClass, setActiveClass] = useState(0);
    const handleItemClick = (i) => {
        setActiveClass(i)
    }
    return (

        <Navbar expand="lg" sticky='top' >
            <Container className='nv'>
                <Navbar.Brand href="/#"><img src={logo} style={{ width: "120px", height: "50px" }} /></Navbar.Brand>
                <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {info.map((items, i) => (
                            <Link to={items.link}
                                onClick={() => handleItemClick(i)}
                                className={activeClass === i ? "active a" : "notactive a"}>
                                {items.text}
                            </Link>
                        ))}
                    </Nav>
                    <Nav>
                        <Nav.Link className='last-nav'>2419799</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    )
}

export default Navs
