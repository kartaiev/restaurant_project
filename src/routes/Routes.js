import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../components/pages/About';
import Drinks from '../components/pages/menu/Drinks';
import Menu from '../components/pages/menu/Menu';
import { Article } from '../elements';

export default ({ food, drinks, menuSectionFunc, handleSearch }) => {
  return (
    <Switch>
      <Article>
        <Route path="/about" component={About} />
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
      </Article>
    </Switch>
  );
};
