import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';

import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
