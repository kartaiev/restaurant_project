import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

export const NavBar = ({ classEl }) => {
  return (
    <div className={`nav-bar ${classEl}`}>
      <div className="nav-bar__wrap">
        <ul>
          <li className={`li-style  ${classEl}`}>
            <NavLink className={`link ${classEl}`} to="/about">
              About
            </NavLink>
          </li>
          <li className={`li-style  ${classEl}`}>
            <NavLink className={`link ${classEl}`} to="/gallery">
              Gallery
            </NavLink>
          </li>
          <li className={`li-style  ${classEl}`}>
            <NavLink className={`link ${classEl}`} to="/menu">
              Menu
            </NavLink>
          </li>
          <li className={`li-style  ${classEl}`}>
            <NavLink className={`link ${classEl}`} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
