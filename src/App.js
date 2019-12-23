import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import menuData from './data/menuData';
import { Home } from './components/Home';
import { NavBar } from './components/layout/NavBar';
import { Hamburger } from './components/layout/NavBarHamburger';
import { Logo } from './components/layout/Logo';
import { About } from './components/pages/About';
import { Gallery } from './components/pages/Gallery';
import { Menu } from './components/pages/menu/Menu';
import { Contact } from './components/pages/Contact';
import { Drinks } from './components/pages/menu/Drinks';
import './App.scss';
import GlobalStyle from './utilities/Global';
// import fb from './config/fbConfig';

const App = () => {
  //* Toggle Class/Element State //
  const [classToggle, setClassToggle] = useState({
    open: true,
    classEl: 'close'
  });

  const { classEl, open } = classToggle;

  //* Toggle Element Func //
  const toggleEl = () => {
    open
      ? setClassToggle({ open: false, classEl: 'open' })
      : setClassToggle({ open: true, classEl: 'close' });
  };

  //* List from MenuData Func //
  const menuFunc = type =>
    menuData
      .map(item => item)
      .filter(item => item.type === type)
      .map(item => (
        <li key={item.id}>
          <div>{item.dish}</div>
          <div>{item.price}</div>
        </li>
      ));

  return (
    <div className="App">
      <GlobalStyle />
      <Logo />
      <NavBar classEl={classEl} toggleEl={toggleEl} />
      <Hamburger classEl={classEl} toggleEl={toggleEl} />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route
          path="/menu/:menuCategory"
          render={() => {
            return <Drinks menuFunc={menuFunc} />;
          }}
        />
        <Route path="/menu" exact render={() => <Menu menuFunc={menuFunc} />} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
