import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
// import fb from './config/fbConfig';

const App = () => {
  //* List of menu items according to type from menuData JSON //
  const menuListFunc = type => {
    return menuData
      .filter(item => item.type === type)
      .map(item => (
        <li key={item.id}>
          <div>{item.dish}</div>
          <div>{item.price}</div>
        </li>
      ));
  };

  //* Menu sections with a list of menu items //
  const menuSectionFunc = typeArr => {
    return typeArr.map((type, i) => (
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
            return <Drinks menuSectionFunc={menuSectionFunc} />;
          }}
        />
        <Route
          path="/menu"
          exact
          render={() => <Menu menuSectionFunc={menuSectionFunc} />}
        />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
