import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';
import rico from '../../assets/images/steakhouse.png';

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar__wrap">
        <img className="rico" src={rico} alt="rico" />
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
