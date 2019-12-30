import styled from 'styled-components';
import { absolute, background, grey, red } from '../utilities';
import { rgba } from 'polished';

export const FormTag = styled.form`
  width: 100%;
  position: relative;
  height: 7vh;

  input {
    width: 100%;
    height: 100%;
    border: none;
    background: ${background};
    color: ${grey};
    padding-top: 20px;
  }

  label {
    width: 100%;
    height: 100%;
    color: ${rgba('#cccccc', 0.6)};
    ${absolute({ yProp: 'bottom' })};
    border-bottom: 1px solid ${grey};
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
