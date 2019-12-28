import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { absolute, background, easeOut, grey, red, yellow } from '../utilities';

const BUTTONS_MODIFIERS = {
  big: () => css`
    width: 100%;
    //margin: 0 0 6vh 0;
  `
};

export const Button = styled.button`
  position: relative;
  font-size: 1.5rem;
  color: ${grey};
  border: 1px solid ${grey};
  background: ${background};
  padding: 1vh 0;
  outline: none;
  ${({ type }) =>
    type === 'active' && `color: ${yellow}; border: 1px solid ${red};`};

  span {
    position: relative;
    z-index: 1;
  }

  &::before {
    width: calc(100% + 4px);
    height: calc(100% - 12px);
    content: '';
    ${absolute({ x: '-2px', y: '6px' })};
    background: ${background};
    ${easeOut};
    transform: scaleY(1);
    ${({ type }) => type === 'active' && `transform: scaleY(0)`};
  }
  &::after {
    width: calc(100% - 12px);
    height: calc(100% + 4px);
    content: '';
    ${absolute({ y: '-2px', x: '6px' })};
    background: ${background};
    ${easeOut};
    transform: scaleX(1);
    transition-delay: 0.5s;
    ${({ type }) => type === 'active' && `transform: scaleX(0)`};
  }

  &:hover:before {
    transform: scaleY(0);
  }

  &:hover:after {
    transform: scaleX(0);
  }

  &:hover {
    color: ${yellow};
    border: 1px solid ${red};
    cursor: pointer;
    ${easeOut};
  }

  ${applyStyleModifiers(BUTTONS_MODIFIERS)}
`;
