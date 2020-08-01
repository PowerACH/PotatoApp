import React, { Component } from 'react';
import axios from 'axios';

export default class RecipeCard extends Component {
    state = {
        id: []
    }

    componentDidMount(){
        let id = this.props.match.params.id
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => { this.setState({ is: res.data })})
            console.log(res)
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
