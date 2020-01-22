import styled from 'styled-components';
import {
  background,
  centerCenter,
  easeOut,
  elementToCenter,
  red,
  yellow
} from '../../../../utilities';

export const HiddenButton = styled.button`
  background-color: ${background};
  ${centerCenter};
  position: relative;
  border: none;
  cursor: pointer;

  span {
    position: absolute;
    ${elementToCenter};
    font-size: 1.5rem;
    color: ${({ state }) =>
      state === 'selected' ? `${yellow}` : `${background}`};

    &:hover {
      ${easeOut};
      color: ${({ state }) =>
        state === 'selected' ? `${background}` : `${red}`};
    }
  }
`;
