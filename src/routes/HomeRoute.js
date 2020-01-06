import NavBar from '../components/layout/NavBar';
import Header from '../components/layout/Header';
import { Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import { Toggle } from '../utilities';
import React from 'react';

export default () => (
  <Toggle>
    {({ on, toggle }) => (
      <>
        <NavBar on={on} toggle={toggle} />
        <Header on={on} toggle={toggle} />
        <Route path="/" exact render={() => <Home on={on} />} />
      </>
    )}
  </Toggle>
);
