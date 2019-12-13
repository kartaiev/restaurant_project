import React from 'react';
import './App.scss';
import { Home } from './components/Home';
import { NavBar } from './components/layout/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
