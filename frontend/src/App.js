import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing/Landing';
import Routes from './components/routing/Routes';

import './styles/App.scss'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route component={Routes} />
    </Switch>
  );
}

export default App;
