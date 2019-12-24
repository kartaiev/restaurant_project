import React from 'react';
import { Logo } from './Logo';
import { Hamburger } from './NavBarHamburger';
import styled from 'styled-components';
import { betweenCenter, fixed, overlay } from '../../utilities';

const Header = ({ on, toggle }) => {
  return (
    <HeaderContainer>
      <Logo />
      <Hamburger on={on} toggle={toggle} />
    </HeaderContainer>
  );
};

export default Header;

//* Style //
const HeaderContainer = styled.header`
  width: 100%;
  height: 10vh;
  background-color: ${overlay};
  ${fixed()};
  ${betweenCenter};
  z-index: 30;
`;
