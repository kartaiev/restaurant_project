import React from 'react';
import { Logo } from '../../elements/Logo';
import { Hamburger } from '../../elements/Hamburger';
import styled from 'styled-components';
import { above, betweenCenter, fixed, overlay } from '../../utilities';

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
  ${above.med`
    background-color: transparent;
  `}
`;
