import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { LinkButton } from '../../elements';
import { betweenCenter } from '../../utilities';

export const MenuBtns = ({ on, toggle }) => {
  return (
    <BtnsWrap>
      <NavLink to="/menu">
        <LinkButton onClick={toggle} type={on ? 'active' : ''}>
          Food
        </LinkButton>
      </NavLink>

      <NavLink to="/menu/drinks">
        <LinkButton onClick={toggle} type={on ? '' : 'active'}>
          Drinks
        </LinkButton>
      </NavLink>
    </BtnsWrap>
  );
};

const BtnsWrap = styled.div`
  width: 100%;
  ${betweenCenter()};
  padding: 0 0 5vh 0;

  a {
    width: 45%;
    height: 100%;

    ${LinkButton} {
      width: 100%;
      height: 100%;
      text-align: center;
    }
  }
`;
