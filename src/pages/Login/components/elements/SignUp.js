import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../../../../config/fbConfig';
import { Button, InputWrap, StyledForm } from '../../../../elements';
import { createUserProfileDocument } from '../../../../contexts/AuthContext';
import { useWindowWidth } from '../../../../hooks/useWindowWidth';
import { SignUpTitle } from './LoginTitles';
import { LoginBtnsWrap } from './LoginContainers';

const SignUp = ({ history }) => {
  const titleIsVisible = useWindowWidth() <= 768 && <SignUpTitle />;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const handleSignUp = async e => {
    e.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, {
        displayName: displayName
      });
      history.push('/reserve');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <StyledForm modifiers="login" onSubmit={handleSignUp}>
      {titleIsVisible}
      <InputWrap>
        <input
          onChange={e => setDisplayName(e.target.value)}
          name="displayName"
          type="text"
          value={displayName}
          required
          placeholder="Name"
          autoComplete="off"
        />
        <span />
      </InputWrap>
      <InputWrap>
        <input
          onChange={e => setEmail(e.target.value)}
          name="email"
          type="email"
          value={email}
          required
          placeholder="Email"
          autoComplete="off"
        />
        <span />
      </InputWrap>
      <InputWrap>
        <input
          onChange={e => setPassword(e.target.value)}
          name="password"
          type="password"
          value={password}
          required
          placeholder="Password"
        />
        <span />
      </InputWrap>

      <LoginBtnsWrap modifiers="signUp">
        <Button modifiers="big" type="submit">
          <span>Sign Up</span>
        </Button>
      </LoginBtnsWrap>
    </StyledForm>
  );
};

export default withRouter(SignUp);
