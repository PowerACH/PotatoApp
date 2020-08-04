import React from 'react'
import '../App.css'
import { Container, Row, Col } from 'react-bootstrap'


export default function SingleMeal(props) {
        const ingredients = []
        //each recipe has up to 20 ingredients. This will loop through them all..
        for (let i = 1; i <= 20; i++) {
            if (props[`strIngredient${i}`]) {
                //will push to the new ingredients array
                ingredients.push(
                    `${props[`strMeasure${i}`]}  ${props[`strIngredient${i}`]}`
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
                    <img className="recipe-image" src={props.strMealThumb} alt="meal"/>
                </Col>
                <Col>
                <h1 className = "single-meal-name">{props.name}</h1>
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
                <p>{props.strInstructions}</p>
                <h6><strong>Culture: </strong> {props.strArea} <strong>Category: </strong> {props.strCategory}</h6>
                </Row>
            </Container>
    )
}
