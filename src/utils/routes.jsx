import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from '../utils/privateRoute';

import Layout from '../components/Layouts/Layout';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path="/" exact component={Login} />
            <Route path="/auth/:token" exact component={Auth} />
            <Route path="/register" exact component={Register} />
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
            <Redirect to="/" />
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Router;