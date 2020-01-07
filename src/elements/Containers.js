import styled, { css } from 'styled-components';
import {
  above,
  absolute,
  background,
  betweenCenter,
  centerCenter,
  easeOut,
  elementToCenter,
  fullScreen,
  overlay,
  startCenter
} from '../utilities';
import { applyStyleModifiers } from 'styled-components-modifiers';

export const Article = styled.article`
  ${fullScreen};
  ${startCenter({ fd: 'column' })};
  position: relative;
  background: ${background};
  overflow-x: hidden;
  overflow-y: scroll;
  ${above.med`
    ${betweenCenter};
    overflow: hidden;
  `}
`;

export const Container = styled.div`
  ${fullScreen};
  ${startCenter({ fd: 'column' })};
  position: relative;
  background: ${background};
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const Section = styled.section`
  width: 80%;
  height: 100vh;
  ${startCenter({ fd: 'column' })};
  position: relative;
  margin-top: 10vh;
  ${above.med`
    width: 40%;
    overflow: scroll;
    margin-bottom: 10vh;
  `}
`;

export const SignInSection = styled(Section)`
  ${centerCenter({ fd: 'column' })};
  margin-top: -5vh;
`;

export const ScrollWrap = styled.div`
  width: 100%;
  ${startCenter({ fd: 'column' })};
  ${above.med`
    overflow: scroll;
  `}
`;

export const Content = styled.div`
  width: 100%;
  ${above.med`
    width: 80%;
  `};
`;

export const MenuContent = styled(Content)`
  ul {
    width: 100%;
    padding: 0 0 5vh 0;
    list-style: none;

    li {
      ${betweenCenter()};
      padding: 1vh 0;
    }
  }
`;

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
    background-color: ${overlay};
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
