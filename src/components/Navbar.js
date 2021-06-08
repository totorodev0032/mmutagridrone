import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar, Nav, NavDropdown
} from 'react-bootstrap'
import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'


import React from 'react'

const NavbarComponent = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand><Link to="/">कृषि विकस द्वार</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/">About</Link></Nav.Link>
                        <NavDropdown title="Researches" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to="/plant-species-project">Plant species project </Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/weed-identification-project">Weed identification project</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/Health-mesurement-project">Health Measurement project</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}

export default NavbarComponent


const Link = styled(LinkR)`
    text-decoration:none;
    color: rgba(0,0,0,0.7);
`


