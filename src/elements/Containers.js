import styled from 'styled-components';
import {
  above,
  betweenCenter,
  centerCenter,
  fullScreen,
  startCenter
} from '../utilities';

export const Article = styled.article`
  ${fullScreen};
  ${startCenter({ fd: 'column' })};
  position: relative;
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
  overflow-x: hidden;
  overflow-y: scroll;
  ${above.med`
    ${betweenCenter};
    overflow: hidden;
  `}
`;

export const Section = styled.section`
  width: 80%;
  height: 100vh;
  ${startCenter({ fd: 'column' })};
  position: relative;
  margin-top: 10vh;
  ${above.med`
    width: 40%;
    overflow-y: scroll;
    overflow-x: hidden;
    margin-bottom: 10vh;  
  `}
`;

export const SignInSection = styled(Section)`
  ${centerCenter({ fd: 'column' })};
  margin: 7vh;

  ${above.med`
    width: 100%;
    height: 100vh;
    ${centerCenter};
    overflow: hidden;
    margin: 0;   
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
