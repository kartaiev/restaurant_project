import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { Home } from './components/Home';
import { NavBar } from './components/layout/NavBar';
import { Hamburger } from './components/layout/NavBarHamburger';
import { Logo } from './components/layout/Logo';
import { About } from './components/pages/About';
import { Gallery } from './components/pages/Gallery';
import { Menu } from './components/pages/menu/Menu';
import { Contact } from './components/pages/Contact';

function App() {
  const [classToggle, setClassToggle] = useState({
    open: true,
    classEl: 'close'
  });

  //*Toggle Element//
  const toggleEl = () => {
    classToggle.open
      ? setClassToggle({ open: false, classEl: 'open' })
      : setClassToggle({ open: true, classEl: 'close' });
  };

  return (
    <div className="App">
      <Logo />
      <NavBar classEl={classToggle.classEl} toggleEl={toggleEl} />
      <Hamburger classEl={classToggle.classEl} toggleEl={toggleEl} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
