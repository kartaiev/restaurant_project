import React from 'react';
import { Button, Container, SignInSection } from '../../../elements';
import SignIn from './elements/SignIn';
import SignUp from './elements/SignUp';

const Login = ({ on, toggle }) => {
  return (
    <Container>
      <SignInSection>
        <Button modifiers="big" onClick={toggle}>
          <span>{on ? 'Create new account' : 'Sign into your account'}</span>
        </Button>
        {on ? <SignIn /> : <SignUp />}
      </SignInSection>
    </Container>
  );
};

export default Login;
