import React, { Component } from 'react'

export default class SearchResults extends Component {
    render() {
        return (
            <li className = "search-results">
                <img src={meals.strMealThumb} alt = "recipe" />
                <h5>{meal.strMeal}</h5>
            </li>
        )
    }
}
