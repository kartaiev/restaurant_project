import styled, { css } from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { above } from '../utilities';
import React from 'react';

const IMAGE_MODIFIERS = {
  page: () => css`
    width: 100%;
    height: auto;
    ${above.med`
      width: 60%
      height: 100vh
    `};
  `,
  slide: () => css`
    height: 100%;
  `
};

export const Image = styled.img`
  background: no-repeat center center/cover;

  ${applyStyleModifiers(IMAGE_MODIFIERS)};
`;

export const pageImageElement = img => (
  <Image modifiers="page" src={img} alt="image" />
);
