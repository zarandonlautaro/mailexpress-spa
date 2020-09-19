import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/dashboard" exact component={Login} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
