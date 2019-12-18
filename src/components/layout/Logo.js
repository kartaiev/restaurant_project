import React from 'react';
import { NavLink } from 'react-router-dom';
import './Logo.scss';
import steakhouse from '../../assets/images/charc-2.png';


export const Logo = () => {
  return (
    <div className="logo-wrap">
      <NavLink className="logo-link" to="/" />
      <img className="logo" src={steakhouse} alt="logo" />
    </div>
  );
};
