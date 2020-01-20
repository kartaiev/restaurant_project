import React, { useContext, useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { auth, googleAuthProvider } from '../../../../config/fbConfig';
import { AuthContext } from '../../../../contexts/AuthContext';
import { Button, InputWrap, StyledForm } from '../../../../elements';
import { useWindowWidth } from '../../../../hooks/useWindowWidth';
import { SignInTitle } from './LoginTitles';
import styled from 'styled-components';
import { grey, yellow } from '../../../../utilities';
import { FaGoogle } from 'react-icons/fa';
import { LoginBtnsWrap } from './LoginContainers';

const SignIn = ({ history }) => {
  const titleIsVisible = useWindowWidth() <= 768 && <SignInTitle />;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //   setEmail('');
  //   setPassword('');
  //   console.log(email);
  // }, [email, password]);

  //* Login to firebase with email and password //
  const handleLogin = async e => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
      history.push('/reserve');
    } catch (error) {
      alert(error.message);
    }
  };

  //* Login to firebase with google //
  const handleGoogleAuth = async e => {
    e.preventDefault();
    try {
      await auth.signInWithPopup(googleAuthProvider);
      history.push('/reserve');
    } catch (error) {
      console.log(error.message);
    }
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/reserve" />;
  }

  return (
    <StyledForm modifiers="login" onSubmit={handleLogin}>
      {titleIsVisible}
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
          autoComplete="off"
        />
        <span />
      </InputWrap>
      <div>
        <ForgotBtn>
          <p>Forgot your password?</p>
        </ForgotBtn>
      </div>
      <LoginBtnsWrap>
        <Button type="submit">
          <span>Sign In</span>
        </Button>
        <Button onClick={handleGoogleAuth}>
          <span>
            <FaGoogle />
          </span>
        </Button>
      </LoginBtnsWrap>
    </StyledForm>
  );
};

export default withRouter(SignIn);

const ForgotBtn = styled.button`
  background: transparent;
  border: none;
  color: ${grey};
  height: 1rem;

  &:hover {
    color: ${yellow};
    cursor: pointer;
  }
`;
