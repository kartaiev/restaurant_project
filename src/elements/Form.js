import styled, { css } from 'styled-components';
import {
  above,
  absolute,
  background,
  betweenStart,
  easeOut,
  grey,
  red
} from '../utilities';
import { applyStyleModifiers } from 'styled-components-modifiers';

const FORM_MODIFIERS = {
  login: () => css`
    height: 100%;
  `,
  menu: () => css`
    height: 15vh;
    margin: 5vh;
    ${above.med`
    width: 80%;
  `};
  `
};

export const StyledForm = styled.form`
  width: 100%;
  
  ${betweenStart({ fd: 'column' })};
  ${above.med`
    width: 60%;
  `};
  
  input {
      width: 100%;
      height: 100%;
      background: ${background};
      border: none;
      color: ${grey};
      ${easeOut};
      outline: none;

      &:focus + span,
      &:valid + span {
        background-position: left center;
      }

      &::placeholder {
        color: ${grey};
        z-index: 200;
      }
    }
    span {
      width: 100%;
      height: 1px;
      ${absolute({ yProp: 'bottom', y: '0' })};
      background-image: linear-gradient(to right, ${red} 50%, ${grey} 50%);
      background-size: 200% 100%;
      background-position: right center;
      ${easeOut};
    }
  }
  
  ${applyStyleModifiers(FORM_MODIFIERS)}
`;

export const InputWrap = styled.div`
  width: 100%;
  height: 6vh;
  position: relative;
`;
