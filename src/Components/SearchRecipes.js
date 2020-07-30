import React from 'react';
import '../App.css';
import { InputGroup, FormControl, Button} from 'react-bootstrap'

export default class SearchRecipes extends React.Component {

    //create a function to search recipes
        


    render() {
        return (
            //Search Bar (Bootstrap)
            <InputGroup size="lg" className="mb-3">
            <FormControl
              placeholder="enter keyword"
              aria-label="keyword"
              aria-describedby="basic-addon2"
              autoComplete="list"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Search Recipes</Button>
            </InputGroup.Append>
          </InputGroup>
        )
    }
}