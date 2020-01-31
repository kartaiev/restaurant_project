import styled from 'styled-components';
import {
  absolute,
  centerCenter,
  easeOut,
  grey,
  red
} from '../../../../utilities';

export const DelBtn = styled.div`
  height: 10vh;
  width: 25px;
  ${centerCenter};
  cursor: pointer;
  ${absolute({ x: '3%', y: '1,5rem', xProp: 'right' })};

  &:hover > span {
    background-color: ${red};
  }

  span {
    width: 100%;
    height: 2px;
    background-color: ${grey};
    position: absolute;
    left: 0;
    ${easeOut};

    &:nth-child(1) {
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
`;

export const EditBtn = styled.div`
  height: 10vh;
  width: 25px;
  ${centerCenter};
`;
