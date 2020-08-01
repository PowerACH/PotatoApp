import React, { Component } from 'react'

export default class RecipeCard extends Component {
    state = {
        id: ""
    }
    
    render() {
        return (
            <div className = "single-meal-container">
                <div className = "single-meal-image">
                    <img src={this.strMealThumb}/>
                </div>
                <div className = "single-meal-name">
                    <h1>{this.strMeal}</h1>
                </div>

            </div>
        )
    }
}
