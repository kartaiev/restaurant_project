import React from 'react';
import styled from 'styled-components';
import { ButtonLink } from '../../elements';
import { betweenCenter } from '../../utilities';

export const MenuBtns = ({ on, toggle }) => {
  return (
    <BtnsWrap>
      <ButtonLink to="/menu" onClick={toggle} type={on ? 'active' : ''}>
        Food
      </ButtonLink>
      <ButtonLink to="/menu/drinks" onClick={toggle} type={on ? '' : 'active'}>
        Drinks
      </ButtonLink>
    </BtnsWrap>
  );
};

const BtnsWrap = styled.div`
  width: 100%;
  ${betweenCenter()};
  padding: 5vh 0;

  ${ButtonLink} {
    width: 45%;
    height: 100%;
    text-align: center;
  }
`;
