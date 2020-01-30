import { css } from 'styled-components';

export const centerCenter = ({ fd = 'row' } = {}) => css`
  display: flex;
  flex-direction: ${fd};
  justify-content: center;
  align-items: center;
`;

export const startCenter = ({ fd = 'row' } = {}) => css`
  display: flex;
  flex-direction: ${fd};
  justify-content: flex-start;
  align-items: center;
`;

export const betweenCenter = ({ fd = 'row' } = {}) => css`
  display: flex;
  flex-direction: ${fd};
  justify-content: space-between;
  align-items: center;
`;
export const aroundCenter = ({ fd = 'row' } = {}) => css`
  display: flex;
  flex-direction: ${fd};
  justify-content: space-around;
  align-items: center;
`;
export const aroundStart = ({ fd = 'row' } = {}) => css`
  display: flex;
  flex-direction: ${fd};
  justify-content: space-around;
  align-items: flex-start;
`;

export const betweenStart = ({ fd = 'row' } = {}) => css`
  display: flex;
  flex-direction: ${fd};
  justify-content: space-between;
  align-items: flex-start;
`;

export const startStart = ({ fd = 'row' } = {}) => css`
  display: flex;
  flex-direction: ${fd};
  justify-content: flex-start;
  align-items: flex-start;
`;

export const startEnd = ({ fd = 'row' } = {}) => css`
  display: flex;
  flex-direction: ${fd};
  justify-content: flex-start;
  align-items: flex-end;
`;

export const centerStart = ({ fd = 'row' } = {}) => css`
  display: flex;
  flex-direction: ${fd};
  justify-content: center;
  align-items: flex-start;
`;
