import React from 'react'
import SingleMeal from './SingleMeal';

export default class RandomMeal extends React.Component {

    componentDidMount = () => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(response => response.meals[0].idMeal)
            .then(response => {
                console.log(response)
            })
            .catch(e => {
                console.error(e);
            })
    }

    render() {
    return (
        <div>
            <h1>Hello</h1>
        </div>
     ) }
}
