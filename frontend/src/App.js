import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing/Landing';
import Routes from './components/routing/Routes';

import './styles/App.scss'

function App() {
  return (
    <Router>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
      </Router>
  );
}

export default App;
