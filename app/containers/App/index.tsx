/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Login from 'containers/Login';
import ListUser from 'containers/ListUser';
import Sigup from 'containers/Sigup';
import history from 'utils/history';

import 'assets/css/style.css';
import 'assets/css/themify-icons.css';
import 'bootstrap';
import 'assets/js/template';

export default function App() {
  const currentRoute = window.location.pathname;
  console.log('App -> currentRoute', currentRoute);
  const token = localStorage.getItem('token');
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  if (!token && currentRoute !== '/login' && currentRoute !== '/sigup') {
    history.push('/login');
  }
  if (currentRoute === '/') {
    token ? history.push('/list') : history.push('/login');
  }
  return (
    <>
      <Helmet titleTemplate="%s - React.js" defaultTitle="React.js">
        <meta name="description" content="A React.js application" />
      </Helmet>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/list" component={ListUser} />
        <Route path="/sigup" component={Sigup} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </>
  );
}
