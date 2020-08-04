import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css'
import RecipeCard from './RecipeCard'

export default function NavBar() {

    return (
        <div>
            <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand href="/" className="nav-logo mr-auto">potato</Navbar.Brand>
                <Nav className="nav-logo ml-auto">
                    <Nav.Link href="/">home</Nav.Link>
                    <Nav.Link href="/Random">random meal</Nav.Link>
                    {/* <Nav.Link href="#">saved</Nav.Link> */}
                </Nav>
            </Navbar>
        </div>
    )
}
