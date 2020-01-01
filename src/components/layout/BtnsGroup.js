import React from 'react';
import styled from 'styled-components';
import { Button } from '../../elements';
import { betweenCenter } from '../../utilities';

const BtnsGroup = ({ on, toggle }) => {
  return (
    <BtnsWrap>
      <Button disabled={on} onClick={toggle} type={on ? 'active' : ''}>
        <span>Sign In</span>
      </Button>

      <Button disabled={!on} onClick={toggle} type={!on ? 'active' : ''}>
        <span>Sign Up</span>
      </Button>
    </BtnsWrap>
  );
};

export default BtnsGroup;

const BtnsWrap = styled.div`
  width: 100%;
  ${betweenCenter()};

  ${Button} {
    width: 45%;
    height: 100%;
    text-align: center;

    span {
      position: relative;
      z-index: 1;
    }
  }
`;
