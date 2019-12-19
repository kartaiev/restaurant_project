import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
// import fb from './config/fbConfig';
import { Home } from './components/Home';
import { NavBar } from './components/layout/NavBar';
import { Hamburger } from './components/layout/NavBarHamburger';
import { Logo } from './components/layout/Logo';
import { About } from './components/pages/About';
import { Gallery } from './components/pages/Gallery';
import { Menu } from './components/pages/menu/Menu';
import { Contact } from './components/pages/Contact';
import { Drinks } from './components/pages/menu/Drinks';
import menuData from './data/menuData';

const App = () => {
  //* Toggle Class/Element State //
  const [classToggle, setClassToggle] = useState({
    open: true,
    classEl: 'close'
  });

  //* Toggle Element Func //
  const toggleEl = () => {
    classToggle.open
      ? setClassToggle({ open: false, classEl: 'open' })
      : setClassToggle({ open: true, classEl: 'close' });
  };

  //* List from MenuData Func //
  const menuFunc = type =>
    menuData
      .map(item => item)
      .map(item => {
        if (item.type === type) {
          return (
            <li key={item.id}>
              <div>{item.dish}</div>
              <div>{item.price}</div>
            </li>
          );
        }
      });

  return (
    <div className="App">
      <Logo />
      <NavBar classEl={classToggle.classEl} toggleEl={toggleEl} />
      <Hamburger classEl={classToggle.classEl} toggleEl={toggleEl} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/gallery" component={Gallery} />
        <Route
          exact
          path="/menu/:menuCategory"
          render={() => {
            return <Drinks menuFunc={menuFunc} />;
          }}
        />
        <Route exact path="/menu" render={() => <Menu menuFunc={menuFunc} />} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
