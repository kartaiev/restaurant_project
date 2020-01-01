import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import menuData from './data/menuData';
import { Home } from './components/Home';
import { NavBar } from './components/layout/NavBar';
import { About } from './components/pages/About';
import { Menu } from './components/pages/menu/Menu';
import { Contact } from './components/pages/Contact';
import { Drinks } from './components/pages/menu/Drinks';
import GlobalStyle from './utilities/Global';
import Header from './components/layout/Header';
import { Toggle } from './utilities';
import Gallery from './components/pages/Gallery';
import { Subtitle } from './elements';
import Reserve from './components/pages/Reserve';
// import fb from './config/fbConfig';

const App = () => {
  //* Initial data state
  const [data, setData] = useState({
    menu: []
  });

  const { menu } = data;

  //* Get data from JSON and update data state
  useEffect(() => {
    return setData({ menu: menuData });
  }, []);

  //* Search input state //
  const [search, setSearch] = useState('');

  //* Filtered menu according to search input //
  const filteredMenu = menu.filter(item =>
    item.dish.toLowerCase().includes(search.toLowerCase())
  );

  //* Filtered food
  const foodUnfiltered = filteredMenu
    .filter(item => item.category === 'food')
    .map(item => item.type);

  const food = foodUnfiltered.filter(
    (item, i) => foodUnfiltered.indexOf(item) >= i
  );

  //* Filtered drinks
  const drinksUnfiltered = filteredMenu
    .filter(item => item.category === 'drinks')
    .map(item => item.type);

  const drinks = drinksUnfiltered.filter(
    (item, i) => drinksUnfiltered.indexOf(item) >= i
  );

  //* List of menu items according to type func //
  const menuListFunc = type => {
    return filteredMenu
      .filter(item => item.type === type)
      .map(item => (
        <li key={item.id}>
          <div>{item.dish}</div>
          <div>{item.price}</div>
        </li>
      ));
  };

  //* Menu sections with a list of menu items func //
  const menuSectionFunc = category => {
    console.log(filteredMenu);
    console.log(search);
    return category.map((type, i) => (
      <div key={i}>
        <Subtitle>{type}</Subtitle>
        <ul>{menuListFunc(type)}</ul>
      </div>
    ));
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <NavBar on={on} toggle={toggle} />
            <Header on={on} toggle={toggle} />
          </div>
        )}
      </Toggle>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route
          path="/menu/:menuCategory"
          render={() => {
            return (
              <Drinks
                drinks={drinks}
                menuSectionFunc={menuSectionFunc}
                onChange={e => setSearch(e.target.value)}
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
              onChange={e => setSearch(e.target.value)}
            />
          )}
        />
        <Toggle>
          {({ on, toggle }) => (
            <Route
              path="/reserve"
              render={() => <Reserve on={on} toggle={toggle} />}
            />
          )}
        </Toggle>

        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
