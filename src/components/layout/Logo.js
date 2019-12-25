import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import steakhouse from '../../assets/images/steakhouse.png';
import styled from 'styled-components';

export const Logo = () => {
  return (
    <Fragment>
      <NavLink className="logo-link" to="/">
        <LogoTag className="logo" src={steakhouse} alt="logo" />
      </NavLink>
    </Fragment>
  );
};

//* Style //

const LogoTag = styled.img`
  height: 5vh;
  padding-left: 1.5rem;
  cursor: pointer;
  z-index: 50;
`;
