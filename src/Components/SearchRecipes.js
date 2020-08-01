import React from 'react';
import '../App.css';
import { InputGroup, FormControl, Button, Link} from 'react-bootstrap'
import axios from 'axios'


//Search bar for Search Recipes component
export default class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            keyword: "", //search value
            recipe: [], //recipe results
            count: 0 //number of results found
        }
    }

    componentDidMount = () => { 
        document.addEventListener('keypress', this.enter);//makes the enter key listener active 
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.enter); //deactivates the key listener
    }

    //a function for search bar to search
    handleSearch = event => {
        event.preventDefault();
        // console.log(this.state.keyword)
        
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + this.state.keyword)
        .then((data => {
            // console.log(data.data.meals);
            this.setState({recipe: data.data.meals}) //change state of recipe 
            this.setState({count: this.state.recipe.length}) //change state of count
            // console.log(this.state)
        }))
        
        .catch(error => {
            console.error( error.message );
        })
    }
    //a function to assign value to keyword
    handleChange = event => {
        this.setState({[event.target.id]: event.target.value
        }); 
    }

    render() {
        // console.log(this.state)
        return (
    <div>        
        <div className="search-bar">
            {/* //Search Bar (Bootstrap) */}
        <InputGroup size="lg" className="mb-3" >
            <FormControl
              id = "keyword"
              placeholder="enter keyword"
              aria-describedby="basic-addon2"
              autoComplete="list"
              onChange={this.handleChange} 
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={this.handleSearch}>search recipes</Button>
            </InputGroup.Append>
          </InputGroup>
            </div>
          <div>
                <h1 className = "results-found">{this.state.count} recipes found</h1>
          </div>
          <div className = "result-list">
                {
                    
                    this.state.recipe.map((recipe, i) => {
                        console.log(recipe.idMeal)
                        return (
                            <li className = "search-results" key={i} >
                            <Link to={recipe.idMeal}>
                                <img src={recipe.strMealThumb} alt = "recipe" />
                                </Link>
                                <h5>{recipe.strMeal}</h5>
                                
                            </li>
                        )
                    })
                }
                </div>
          </div>
        )
    }
    
    //Function for the ENTER key listener 
    enter = target => {
        if(target.charCode === 13) {
            this.handleSearch(target) 
        }
    }
}