import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css'

export default function NavBar() {

    function handleClick() {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(response => response.meals[0].idMeal)
             
            .then(response => <Link to ="/recipe/:id" />)
            .catch(e => {
                console.error(e);
            })
    }

    return (
        <div>
            <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand href="/" className="nav-logo mr-auto">potato</Navbar.Brand>
                <Nav className="nav-logo ml-auto">
                    <Nav.Link href="/">home</Nav.Link>
                    <Nav.Link href="#" onClick={handleClick}>random meal</Nav.Link>
                    <Nav.Link href="#">saved</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}
