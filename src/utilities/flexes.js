import { css } from 'styled-components';

export const centerCenter = ({ fd = 'row' } = {}) => css`
  display: flex;
  flex-direction: ${fd};
  justify-content: center;
  align-items: center;
`;

export const betweenCenter = ({ fd = 'row' } = {}) => css`
  display: flex;
  flex-direction: ${fd};
  justify-content: space-between;
  align-items: center;
`;
