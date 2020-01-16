import React from 'react';
import SignIn from './elements/SignIn';
import SignUp from './elements/SignUp';
import DesktopLoginToggle from './elements/DesktopLoginToggle';
import { DesktopLoginContainer } from './elements/LoginContainers';

const DesktopLogin = ({ on, toggle }) => {
  return (
    <>
      <DesktopLoginContainer>
        {on ? <SignIn /> : <SignUp />}
      </DesktopLoginContainer>
      <DesktopLoginToggle toggle={toggle} on={on} />
    </>
  );
};

export default DesktopLogin;
