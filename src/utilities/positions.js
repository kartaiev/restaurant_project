import { css } from 'styled-components';

export const fixed = ({
  x = 0,
  y = 0,
  yProp = 'top',
  xProp = 'left'
} = {}) => css`
  position: fixed;
  ${yProp}: ${y};
  ${xProp}: ${x};
`;

export const absolute = ({
  x = 0,
  y = 0,
  yProp = 'top',
  xProp = 'left'
} = {}) => css`
  position: absolute;
  ${yProp}: ${y};
  ${xProp}: ${x};
`;

export const elementToCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
