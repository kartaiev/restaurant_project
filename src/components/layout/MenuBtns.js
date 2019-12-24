import React from 'react';
import styled from 'styled-components';
import { LinkButton } from '../../elements';
import { betweenCenter } from '../../utilities';

export const MenuBtns = ({ on, toggle }) => {
  return (
    <BtnsWrap>
      <LinkButton to="/menu" onClick={toggle} type={on ? 'active' : ''}>
        Food
      </LinkButton>
      <LinkButton to="/menu/drinks" onClick={toggle} type={on ? '' : 'active'}>
        Drinks
      </LinkButton>
    </BtnsWrap>
  );
};

const BtnsWrap = styled.div`
  width: 100%;
  ${betweenCenter()};
  padding: 0 0 5vh 0;

  ${LinkButton} {
    width: 45%;
    height: 100%;
    text-align: center;
  }
`;
