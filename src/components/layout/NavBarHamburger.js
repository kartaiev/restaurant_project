import React from 'react';
import './NavBarHamburger.scss';

export const Hamburger = ({ classEl, showEl }) => {
  return (
    <div className={`nav-btn ${classEl}`} onClick={showEl}>
      <div className="nav-line" />
      <div className="nav-line" />
    </div>
  );
};
