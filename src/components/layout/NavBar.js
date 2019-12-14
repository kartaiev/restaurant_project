import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

export const NavBar = ({ classEl }) => {
  return (
    <div className={`nav-bar ${classEl}`}>
      <div className="nav-bar__wrap">
        <ul>
          <li className={`li-style  ${classEl}`}>
            <NavLink className="link" to="/about">
              About
            </NavLink>
          </li>
          <li className={`li-style  ${classEl}`}>
            <NavLink className="link" to="/gallery">
              Gallery
            </NavLink>
          </li>
          <li className={`li-style  ${classEl}`}>
            <NavLink className="link" to="/menu">
              Menu
            </NavLink>
          </li>
          <li className={`li-style  ${classEl}`}>
            <NavLink className="link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
