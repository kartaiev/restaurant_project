import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { easeOut, grey, overlay, red, yellow } from '../utilities';

const BUTTONS_MODIFIERS = {
  big: () => css`
    width: 100%;
    margin: 0 0 6vh 0;
  `
};

export const Button = styled.button`
  font-size: 1.5rem;
  color: ${grey};
  border: 1px solid ${grey};
  background: ${overlay};
  ${({ type }) =>
    type === 'active' && `color: ${yellow}; border: 1px solid ${red};`};
  padding: 1vh 0;
  outline: none;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: ${yellow};
    border: 1px solid ${red};
    cursor: pointer;
    ${easeOut};
  }

  ${applyStyleModifiers(BUTTONS_MODIFIERS)}
`;
