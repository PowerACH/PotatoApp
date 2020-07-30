import React from 'react';
import Home from './Components/Home';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SearchRecipes from './Components/SearchRecipes';


function App() {
  return (
    <BrowserRouter>
      <div className = "App">
      <Switch>
        <Home />
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route path="/SearchRecipes">
          <SearchRecipes />
        </Route>
      
      </Switch>
      </div>
  </BrowserRouter>
  );
}

export default App;
