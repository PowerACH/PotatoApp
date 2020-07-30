import React from 'react';
import Home from './Components/Home';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className = "App">
      <Home />
      <Switch>
        
        <Route exact path="/Home">
          <Home />
        </Route>
      
      </Switch>
      </div>
  </BrowserRouter>
  );
}

export default App;
