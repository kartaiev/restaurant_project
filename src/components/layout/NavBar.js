import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

export const NavBar = ({ classEl, toggleEl }) => {
  const pages = ['About', 'Gallery', 'Menu', 'Contact'];
  return (
    <div className={`nav-bar ${classEl}`}>
      <div className="nav-bar__wrap">
        <ul>
          {pages.map((page, index) => (
            <li key={index} className={`li-style  ${classEl}`}>
              <NavLink
                className={`link ${classEl}`}
                to={`/${page.toLowerCase()}`}
                onClick={toggleEl}
              >
                {page}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
