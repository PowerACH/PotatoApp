import React from 'react';
import Home from './Components/Home';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SearchRecipes from './Components/SearchRecipes';
import NavBar from './Components/NavBar';
import GetStarted from './Components/GetStarted'


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
        <Route path="*" component={Home} />
      </Switch>
      </div>
  </BrowserRouter>
  );
}

export default App;
