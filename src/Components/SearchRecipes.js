import React from 'react';
import '../App.css';
import { InputGroup, FormControl, Button} from 'react-bootstrap'

export default class SearchRecipes extends React.Component {
    constructor() {
        super();
        this.state = {
            keyword: ""
        }
    }

    //create a function for search bar to search
    handleSearch = event => {
        console.log(this.state)
        event.preventDefault();
    }
    //create a function to assign value to keyword
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
           
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
}