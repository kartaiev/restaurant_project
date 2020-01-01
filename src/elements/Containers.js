import styled from 'styled-components';
import {
  background,
  betweenCenter,
  centerCenter,
  fullScreen,
  startCenter
} from '../utilities';

export const Article = styled.article`
  ${fullScreen};
  ${startCenter({ fd: 'column' })};
  position: relative;
  background: ${background};
  overflow-x: hidden;
  overflow-y: scroll;
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
`;

export const SignInSection = styled(Section)`
  ${centerCenter({ fd: 'column' })};
  margin-top: -5vh;
`;

export const Content = styled.div`
  width: 100%;
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
