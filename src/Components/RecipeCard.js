import React, { Component } from 'react';
import axios from 'axios';

export default class RecipeCard extends Component {

    componentDidMount(){
        const {id} = this.props.match.params;
        axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
            .then(res => { this.setState({ id: res.data })})
            console.log(id)
    }
    
    render() {
        console.log(this.state.id.meals)
        return (
            <div className = "single-meal-container">
            <h1>recipe goes here</h1>
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
