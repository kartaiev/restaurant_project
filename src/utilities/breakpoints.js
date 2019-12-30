import { css } from 'styled-components';

const size = {
  small: 480,
  med: 768,
  large: 992,
  xLarge: 1200
};

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
