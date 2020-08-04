import React from 'react'
import { Link } from 'react-router-dom'

export default function ResultList(props) {

    return (
    <div className = "result-list">
                {
                    
                    this.state.recipe.map((props, i) => {
                        console.log(props.idMeal)
                        return (
                            <li className = "search-results" key={i} >
                            <Link to={{
                                pathname: `/recipe/${props.idMeal}` ,
                                state: {
                                    id: props.idMeal,
                                }}}>
                                <img src={props.strMealThumb} alt = "recipe" />
                                </Link>
                                <h5>{props.strMeal}</h5>
                                
                            </li>
                        )
                    })
                }
                </div>
    )
}
