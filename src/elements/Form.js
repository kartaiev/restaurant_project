import styled from 'styled-components';
import { absolute, background, easeOut, grey, red, yellow } from '../utilities';
import { rgba } from 'polished';

export const FormTag = styled.form`
  width: 100%;
  position: relative;
  height: 7vh;
  overflow: hidden;
  margin: 5vh 0 7vh 0;

  input {
    width: 100%;
    height: 100%;
    border: none;
    background: ${background};
    color: ${grey};
    padding-top: 10px;
    outline: none;

    &:focus + label span,
    &:valid + label span {
      //transform: translateY(-200%);
      opacity: 0;
      font-size: 0.8rem;
      color: ${yellow};
    }

    &:focus + label::after,
    &:valid + label::after {
      transform: translateX(0);
    }
  }

  label {
    width: 100%;
    height: 100%;
    color: ${rgba('#cccccc', 0.6)};
    ${absolute({ yProp: 'bottom' })};
    border-bottom: 1px solid ${grey};
    pointer-events: none;

    &::after {
      content: '';
      ${absolute({ yProp: 'bottom', y: '-1px' })};
      width: 100%;
      height: 100%;
      border-bottom: 1px solid ${red};
      transform: translateX(-100%);
      ${easeOut};
    }

    span {
      position: absolute;
      bottom: 5px;
      ${easeOut};
    }
  }
`;

// export const Input = styled.input`
//   width: 100%;
//   height: 100%;
//   border: none;
//   border-bottom: ${grey} 1px solid;
//   background: ${background};
//   color: ${grey};
//   padding-top: 20px;
//   outline: none;
//
//   &:focus {
//     border-bottom: ${red} 1px solid;
//   }
// `;
