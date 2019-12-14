import React, { useState } from 'react';
import './App.scss';
import { Home } from './components/Home';
import { NavBar } from './components/layout/NavBar';
import { Hamburger } from './components/layout/NavBarHamburger';
import { Logo } from './components/layout/Logo';

function App() {
  const [classToggle, setClassToggle] = useState({
    open: true,
    classEl: 'close'
  });

  const showEl = () => {
    if (classToggle.open) setClassToggle({ open: false, classEl: 'open' });
    else setClassToggle({ open: true, classEl: 'close' });
  };

  return (
    <div className="App">
      <Logo />
      <NavBar classEl={classToggle.classEl} />
      <Hamburger showEl={showEl} classEl={classToggle.classEl} />
      <Home />
    </div>
  );
}

export default App;
