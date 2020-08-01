import React from 'react';
import Home from './Components/Home';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SearchRecipes from './Components/SearchRecipes';
import NavBar from './Components/NavBar';
import GetStarted from './Components/GetStarted'
import RecipeCard from './Components/RecipeCard';


function App() {
  return (
    <BrowserRouter>
      <div className = "App">
      <NavBar />
      <Switch>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route path="/SearchRecipes">
          <SearchRecipes />
        </Route>
        <Route path="/GetStarted">
          <GetStarted />
        </Route>
        <Route exact path="/recipe/:id" component={RecipeCard} />
        <Route path="*" component={Home} />
      </Switch>
      </div>
  </BrowserRouter>
  );
}

export default App;
