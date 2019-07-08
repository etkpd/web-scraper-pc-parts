import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';


if (localStorage.token) {
  store.dispatch(loadUser());
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);