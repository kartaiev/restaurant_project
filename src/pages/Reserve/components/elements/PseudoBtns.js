import styled from 'styled-components';
import {
  absolute,
  centerCenter,
  easeOut,
  grey,
  red,
  yellow
} from '../../../../utilities';

export const DelBtn = styled.div`
  width: 25px;
  height: 10vh;
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
    display: ${({ time }) => time === 'past' && 'none'};

    &:nth-child(1) {
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
`;

export const EditBtn = styled.div`
  display: ${({ time }) => time === 'past' && 'none'};
  height: 10vh;
  width: 25px;
  ${centerCenter};
  cursor: pointer;

  svg {
    width: 25px;
    height: 25px;
    display: ${({ time }) => time === 'past' && 'none'};

    &:hover {
      fill: ${yellow};
    }
  }
`;
