import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import CardDetails from './components/CardDetails/CardDetails';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import Error404 from './components/Error/Error404';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/recipe/:id' component={CardDetails} />
        <Route exact path='/create' component={CreateRecipe} />
        <Route path='*' component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
