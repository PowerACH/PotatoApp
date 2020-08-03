import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col} from 'react-bootstrap'
import '../App.css'

export default class RecipeCard extends Component {
    state = {
        recipe: []
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
            .then(res => { this.setState({ recipe: res.data.meals[0] })})
    }

    render() {
        let meal = this.state.recipe
    
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
            <Container className = "single-meal-container">
                <Row>
                <Col xs={6} md={4}>
                    <img className="recipe-image" src={meal.strMealThumb} alt="meal"/>
                </Col>
                <Col>
                <h1 className = "single-meal-name">{meal.strMeal}</h1>
                  <div className = "ingredient-list">
                    <h5><strong>Ingredients: </strong></h5>
                    <ul>
                        {
                            ingredients.map((ingredient,i) => 
                            <li key={i}>{ingredient}</li>)
                        }
                    </ul>
                    
                </div>  
                </Col>
                </Row>
                <Row className="meal-instructions">
                <p>{meal.strInstructions}</p>
                <h6><strong>Culture: </strong> {meal.strArea} <strong>Category: </strong> {meal.strCategory}</h6>
                </Row>
            </Container>
        )
    }
}
