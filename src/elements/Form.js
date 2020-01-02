import styled from 'styled-components';
import { absolute, background, easeOut, grey, red } from '../utilities';

export const StyledForm = styled.form`
  width: 100%;
  height: 45vh;

  div {
    width: 100%;
    height: 7vh;
    position: relative;
    margin: 5vh 0;

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
`;
