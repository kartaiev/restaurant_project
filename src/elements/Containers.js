import styled from 'styled-components';
import {
  background,
  betweenCenter,
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

export const Section = styled.section`
  width: 80%;
  ${startCenter({ fd: 'column' })};
  position: relative;
  padding: 5vh;
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
