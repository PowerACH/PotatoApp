import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function NavBar() {
    return (
        <div>
            <Navbar expand="lg" variant="light" bg="light">
                {/* <Navbar.Brand href="/Home" className="nav-logo m-auto">Potato</Navbar.Brand> */}
                <Nav className="nav-logo ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Surprise Me</Nav.Link>
                    <Nav.Link href="#pricing">Saved</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}
