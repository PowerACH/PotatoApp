import React, { Component } from 'react';
import axios from 'axios';

export default class RecipeCard extends Component {
    state = {
        recipe: []
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
            .then(res => { this.setState({ recipe: res.data.meals[0] })})
            // console.log(this.state)

    }

    render() {
        let meal = this.state.recipe
        console.log(meal.strCategory)

        const ingredients = []
        //each recipe has up to 20 ingredients. This will loop through them all..
        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                //will push to the new ingredients array
                ingredients.push(
                    `${meal[`strMeasure${i}`]}  ${meal[`strIngredient${i}`]}`
                );
            } else {
                //loop will stop when there is no ingredient measure pair.
                break;
            }
            }
        return (
            <div className = "single-meal-container">
            <div className = "single-meal-name">
                    <h1>{meal.strMeal}</h1>
                </div>
                <div className = "single-meal-image">
                    <img src={meal.strMealThumb} alt="meal"/>
                </div>
                <div className = "ingredient-list">
                    <h5>Ingredients: </h5>
                    <ul>
                        {
                            ingredients.map(ingredient => 
                            <li>{ingredient}</li>)
                        }
                    </ul>
                    <h5><span>Culture: </span> {meal.strArea}</h5>
                    <h5><span>Category: </span> {meal.strCategory}</h5>
                </div>
                <div className="meal-instructions">
                <p>{meal.strInstructions}</p>
                </div>

            </div>
        )
    }
}
