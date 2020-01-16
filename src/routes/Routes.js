import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Drinks from '../pages/Menu/Drinks';
import Menu from '../pages/Menu/Menu';
import { Article } from '../elements';

export default () => {
  return (
    <Switch>
      <Article>
        <Route path="/about" component={About} />
        <Route path="/menu/:menuCategory" component={Drinks} />

        <Route path="/menu" exact component={Menu} />
      </Article>
    </Switch>
  );
};
