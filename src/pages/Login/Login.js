import React from 'react';
import MobileLogin from './components/MobileLogin';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import DesktopLogin from './components/DesktopLogin';
import {
  LoginSection,
  MainLoginContainer
} from './components/elements/LoginContainers';

const Login = ({ on, toggle }) => {
  const loginElement =
    useWindowWidth() <= 768 ? (
      <MobileLogin on={on} toggle={toggle} />
    ) : (
      <DesktopLogin on={on} toggle={toggle} />
    );
  return (
    <MainLoginContainer>
      <LoginSection>{loginElement}</LoginSection>
    </MainLoginContainer>
  );
};

export default Login;
