import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import NotFound from '../layout/NotFound';

const Routes = () => {
  return (
    <section className='container'>
      <Switch>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;