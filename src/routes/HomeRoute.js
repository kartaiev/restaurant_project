import NavBar from '../layout/NavBar';
import Header from '../layout/Header';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import { Toggle } from '../utilities';
import React from 'react';

export default () => (
  <Toggle>
    {({ on, toggle }) => (
      <>
        <NavBar on={on} toggle={toggle} />
        <Header on={on} toggle={toggle} />
        <Route path="/" exact render={() => <Home on={on} toggle={toggle} />} />
      </>
    )}
  </Toggle>
);
