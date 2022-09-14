import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';
import CardDetails from './components/CardDetails';
import CreateRecipe from './components/CreateRecipe';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/recipe/:id' component={CardDetails} />
          <Route exact path='/create' component={CreateRecipe} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
