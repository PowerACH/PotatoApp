import React from 'react';
import '../App.css';
import SearchBar from './SearchBar'
import Axios from 'axios';

const BASE_API = "https://www.themealdb.com/api/json/v1/1"

export default class SearchRecipes extends React.Component {
    constructor() {
        super();
        this.state = {
            recipes: []
        }
    }

    componentDidMount() {
        Axios.get(`${BASE_API}/randomselection.php`)
        .then(res=> this.setState({ recipes: res.data }))
        .catch(error => console.error( error.message ));
    }

    render() {
        console.log(recipes)
        return (
            <div>
                <SearchBar />

                
            </div>
            
        )
    }
}