import React from 'react';
import { Button } from '../../../elements';
import SignIn from './elements/SignIn';
import SignUp from './elements/SignUp';
import { MobileLoginContainer } from './elements/LoginContainers';

const MobileLogin = ({ on, toggle }) => {
  return (
    <MobileLoginContainer>
      <Button modifiers="big" onClick={toggle}>
        <span>{on ? 'Create new account' : 'Sign into your account'}</span>
      </Button>
      {on ? <SignIn /> : <SignUp />}
    </MobileLoginContainer>
  );
};

export default MobileLogin;
