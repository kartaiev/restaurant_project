import React from 'react';
import { Article, Button, SignInSection } from '../../elements';
import SignIn from '../layout/SignIn';

const Reserve = () => {
  return (
    <Article>
      <SignInSection>
        <Button modifiers="big">
          <span>Create new account</span>
        </Button>

        <SignIn />
      </SignInSection>
    </Article>
  );
};

export default Reserve;
