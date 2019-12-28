import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../../elements';
import { betweenCenter } from '../../utilities';

export const MenuBtns = ({ on, toggle }) => {
  return (
    <BtnsWrap>
      <NavLink to="/menu">
        <Button onClick={toggle} type={on ? 'active' : ''}>
          <span>Food</span>
        </Button>
      </NavLink>

      <NavLink to="/menu/drinks">
        <Button onClick={toggle} type={!on ? 'active' : ''}>
          <span>Drinks</span>
        </Button>
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

    ${Button} {
      width: 100%;
      height: 100%;
      text-align: center;

      span {
        position: relative;
        z-index: 1;
      }
    }
  }
`;
