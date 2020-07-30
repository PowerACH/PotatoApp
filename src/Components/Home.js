import React from 'react';
import { Button } from 'react-bootstrap'
import '../App.css'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'



export default class Home extends React.Component {

    render() {
        return (
            <div className = "main-container">
                <div className = "main-card">
                    <div className = "main-header">
                    <p className = "main-header-text"><strong>Welcome to <br /> Potato</strong></p>
                    </div>
                    <div className = "main-subheader">
                        <h2>The best source for easy meal recipes.</h2>
                    </div>
                    <br />
                    
                    <Link to = "/SearchRecipes" ><Button variant="dark" onClick={this.handleMenu}>Search Recipes</Button></Link>{' '}
                    <Link to = "/GetStarted"><Button variant="outline-success">Get Started</Button></Link>{' '}
                </div>
            </div>
        )
    }
}