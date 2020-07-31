import React from 'react';
import '../App.css';
import { InputGroup, FormControl, Button} from 'react-bootstrap'
import axios from 'axios'


//Search bar for Search Recipes component
export default class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            keyword: "", //search value
            recipe: {}, //recipe results
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
        console.log(this.state.keyword)
        
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

    
        // resultsFunc = () => { 
        // const keyword = this.state.keyword;
        // const count = this.state.count
        // if (keyword.length > 0 && count > 1) {
        //     document.getElementById("results-found").innerHTML = `${this.state.count} recipes found`
        // } else if (keyword.length > 0 && count === 1) {
        //     document.getElementById("results-found").innerHTML = `${this.state.count} recipe found`
        // } else if (keyword.length > 0 && count === 0) {
        //     document.getElementById("results-found").innerHTML = "no recipes found" }
        // // } else {
        // //     document.getElementById("results-found").innerHTML = "search for a recipe"
        // // }
        // }

    render() {
        return (
        <div>
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
              <Button variant="outline-secondary" onClick={this.handleSearch}>Search Recipes</Button>
            </InputGroup.Append>
          </InputGroup>

          <div>
                <h1 className = "results-found">{this.state.count} recipes found</h1>
          </div>
                {
                    
                }
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