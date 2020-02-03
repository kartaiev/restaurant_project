import styled, { css } from 'styled-components';
import {
  above,
  betweenCenter,
  betweenStart,
  centerCenter,
  fullScreen,
  grey,
  startCenter
} from '../../../../utilities';
import { Button } from '../../../../elements';
import { applyStyleModifiers } from 'styled-components-modifiers';

export const MainLoginContainer = styled.section`
  ${fullScreen};
  ${centerCenter({ fd: 'column' })};
  position: relative;
  overflow: hidden;

  ${above.med`
    ${betweenCenter};
    overflow: hidden;
  `}
`;

export const LoginSection = styled.div`
  width: 80%;
  height: 80vh;
  ${centerCenter({ fd: 'column' })};

  ${above.med`
    width: 100%;
    height: 100vh;
    ${centerCenter};
    overflow: hidden;  
  `}
`;

export const MobileLoginContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  ${startCenter({ fd: 'column' })};
  margin-top: 3vh;
  h3 {
    margin-bottom: 0;
    margin-top: 7vh;
  }
`;

export const DesktopLoginContainer = styled.div`
  width: 60%;
  height: 50%;
  overflow: hidden;
  ${centerCenter}
`;

const LOGINBTNSWRAP_MODIFIERS = {
  signUp: () => css`
    ${Button} {
      width: 100%;
    }
  `
};

export const LoginBtnsWrap = styled.div`
  width: 100%;
  height: 6vh;
  ${betweenCenter()};

  ${Button} {
    width: 45%;
    height: 100%;
    text-align: center;

    span {
      position: relative;
      z-index: 1;
      background-image: none;
      ${centerCenter};
    }
  }

  ${applyStyleModifiers(LOGINBTNSWRAP_MODIFIERS)}
`;

export const LoginToggleContainer = styled.div`
  width: 40%;
  height: 100vh;
  ${centerCenter({ fd: 'column' })};
  overflow: hidden;
  border-left: 1px solid ${grey};
`;

export const LoginToggleContent = styled.div`
  width: 80%;
  height: 50%;
  ${betweenStart({ fd: 'column' })};

  h3 {
    margin-top: 0;
  }
`;

export const LoginToggleMessages = styled.div`
  height: 15vh;
`;
