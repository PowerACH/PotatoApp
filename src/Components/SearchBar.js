import React from 'react';
import '../App.css';
import { InputGroup, FormControl, Button} from 'react-bootstrap'
import axios from 'axios'

//Search bar for Search Recipes component
export default class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            keyword: "",
            data: []
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
        console.log(this.state)
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state}`)
        
    }
    
    //a function to assign value to keyword
    handleChange = event => {
        this.setState({[event.target.id]: event.target.value
        }); 
    }


    render() {
        return (
            //Search Bar (Bootstrap)
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
        )
    }
    
    //Function for the ENTER key listener 
    enter = target => {
        if(target.charCode === 13) {
            this.handleSearch(target) 
        }
    }
}