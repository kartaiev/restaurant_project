import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const IMAGE_MODIFIERS = {
  page: () => css`
    width: 100%;
    min-width: 100%;
    height: auto;
  `,
  slide: () => css`
    height: 100%;
  `
};

export const Image = styled.img`
  background: no-repeat center center/cover;

  ${applyStyleModifiers(IMAGE_MODIFIERS)};
`;
