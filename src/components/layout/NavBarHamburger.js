import React from 'react';
import './NavBarHamburger.scss';

export const Hamburger = ({ classEl, toggleEl }) => {
  return (
    <div className={`nav-btn ${classEl}`} onClick={toggleEl}>
      <div className="nav-line" />
      <div className="nav-line" />
    </div>
  );
};
