import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../components/pages/About';
import Drinks from '../components/pages/Menu/Drinks';
import Menu from '../components/pages/Menu/Menu';
import { Article } from '../elements';

export default ({
  food,
  drinks,
  menuSectionFunc,
  handleSearch,
  clearSearch
}) => {
  return (
    <Switch>
      <Article>
        <Route path="/about" component={About} />
        <Route
          path="/menu/:menuCategory"
          render={() => {
            return (
              <Drinks
                clearSearch={clearSearch}
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
              clearSearch={clearSearch}
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
