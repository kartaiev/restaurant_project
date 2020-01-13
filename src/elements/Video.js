import React from 'react';
import styled, { css } from 'styled-components';
import {
  above,
  absolute,
  easeOut,
  elementToCenter,
  fullScreen,
  overlayLight
} from '../utilities';
import { applyStyleModifiers } from 'styled-components-modifiers';

export const pageVideoElement = vid => (
  <VideoContainer modifiers="page">
    <video
      autoPlay
      loop
      muted
      preload="true"
      src={vid}
      className="video-player"
    />
  </VideoContainer>
);

const VIDEO_MODIFIERS = {
  page: () => css`
    width: 60%;
  `
};

export const VideoContainer = styled.div`
  ${fullScreen};
  float: left;
  position: relative;
  ${easeOut};
  ${above.med`
    ${({ trans }) => trans === 'slide' && `width: 60%; ${easeOut}; float: left`}
  `};

  &::after {
    ${fullScreen};
    ${absolute()};
    // background-color: ${overlayLight};
    content: '';
  }

  img {
    width: 45%;
    ${elementToCenter};
    z-index: 5;
  }

  video {
    ${fullScreen};
    min-width: 100%;
    min-height: auto;
    object-fit: cover;
  }
  
  ${applyStyleModifiers(VIDEO_MODIFIERS)};
`;
