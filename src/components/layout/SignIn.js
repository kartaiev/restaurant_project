import React from 'react';
import { Button, SignInForm } from '../../elements';

const SignIn = () => {
  return (
    <SignInForm modifiers="signIn">
      <div>
        <input name="email" type="email" required />
        <label htmlFor="email">
          <span>Email</span>
        </label>
      </div>
      <div>
        <input name="password" type="password" required />
        <label htmlFor="password">
          <span>Password</span>
        </label>
      </div>
      <Button modifiers="big">
        <span>Sign In</span>
      </Button>
    </SignInForm>
  );
};

export default SignIn;
