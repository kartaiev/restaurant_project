import React from 'react';
import './Logo.scss';
import steakhouse from '../../assets/images/steakhouse.png';

export const Logo = () => {
  return (
    <div>
      <img className="logo" src={steakhouse} alt="logo" />
    </div>
  );
};
