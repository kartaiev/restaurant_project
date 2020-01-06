import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../components/pages/About';
import Gallery from '../components/pages/Gallery';
import Drinks from '../components/pages/menu/Drinks';
import Menu from '../components/pages/menu/Menu';
import ProtectedRoute from './ProtectedRoute';
import Reserve from '../components/pages/Reserve';
import Contact from '../components/pages/Contact';
import { Toggle } from '../utilities';
import Login from '../components/pages/Login';

export default ({ food, drinks, menuSectionFunc, handleSearch }) => {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route
        path="/menu/:menuCategory"
        render={() => {
          return (
            <Drinks
              drinks={drinks}
              menuSectionFunc={menuSectionFunc}
              onChange={handleSearch}
            />
          );
        }}
      />
      <Route
        path="/menu"
        exact
        render={() => (
          <Menu
            food={food}
            menuSectionFunc={menuSectionFunc}
            onChange={handleSearch}
          />
        )}
      />
      <ProtectedRoute path="/reserve" component={Reserve} />
      <Route path="/contact" component={Contact} />
      <Toggle>
        {({ on, toggle }) => (
          <Route
            path="/login"
            render={() => <Login on={on} toggle={toggle} />}
          />
        )}
      </Toggle>
    </Switch>
  );
};
