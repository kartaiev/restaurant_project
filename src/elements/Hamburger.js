import React from 'react';
import styled from 'styled-components';
import { centerCenter, easeOut, fixed, red, yellow } from '../utilities';

export const Hamburger = ({ on, toggle }) => {
  return (
    <HamBtn trans={!on ? 'rotate' : ''} onClick={toggle}>
      <span trans={!on ? 'rotate' : ''} />
      <span trans={!on ? 'rotate' : ''} />
    </HamBtn>
  );
};

//* Style //
const HamBtn = styled.div`
  height: 10vh;
  width: 30px;
  ${centerCenter({ fd: 'column' })};
  ${fixed({ x: '1.5rem', y: '1,5rem', xProp: 'right' })};
  ${easeOut};
  cursor: pointer;
  z-index: 100;
  ${({ trans }) =>
    trans === 'rotate' && `transform: rotate(180deg); ${easeOut}`}

  span {
    width: 100%;
    height: 2px;
    background-image: linear-gradient(to right, ${red} 50%, ${yellow} 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    ${easeOut};
    margin-bottom: 5px;

    &:nth-child(1) {
      ${({ trans }) =>
        trans === 'rotate' &&
        `background-position: left bottom;
      transform: rotate(45deg) translate(5px, 5px);
      ${easeOut}`}
    }

    &:nth-child(2) {
      ${({ trans }) =>
        trans === 'rotate' &&
        `background-position: left bottom;
      transform: rotate(-45deg) translate(.5px, .5px);
      ${easeOut}`}
    }
  }
`;
