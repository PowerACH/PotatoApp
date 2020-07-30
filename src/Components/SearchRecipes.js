import React from 'react';
import '../App.css';
import { InputGroup, FormControl, Button} from 'react-bootstrap'

export default class SearchRecipes extends React.Component {
    render() {
        return (
            <InputGroup className="mb-3">
            <FormControl
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        )
    }
}