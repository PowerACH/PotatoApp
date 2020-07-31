import React from 'react';
import '../App.css';
import { InputGroup, FormControl, Button} from 'react-bootstrap'

//Search bar for Search Recipes component
export default class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            keyword: ""
        }
    }

    componentDidMount() {
        document.addEventListener('keypress', this.enter);
    }

    componentWillUnmount() {
        document.removeEventListener('keypress', this.enter);
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
    
    enter = target => {
        if(target.charCode === 13) {
            this.handleSearch()
        }
    }
}