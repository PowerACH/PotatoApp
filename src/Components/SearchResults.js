import React, { Component } from 'react'

export default class SearchResults extends Component {
    render() {
        return (
            <li className = "search-results">
                <img src={this.strMealThumb} alt = "recipe" />
                <h5>{this.strMeal}</h5>
            </li>
        )
    }
}
