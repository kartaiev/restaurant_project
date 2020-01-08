import { Toggle } from '../utilities';
import { Route } from 'react-router-dom';
import Login from '../components/pages/Login';
import React from 'react';

export default () => (
  <Toggle>
    {({ on, toggle }) => (
      <Route path="/login" render={() => <Login on={on} toggle={toggle} />} />
    )}
  </Toggle>
);
