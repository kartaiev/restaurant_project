import React, { useContext, useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { auth } from '../../../../config/fbConfig';
import { AuthContext } from '../../../../contexts/AuthContext';
import { Button, InputWrap, StyledForm } from '../../../../elements';
import { useWindowWidth } from '../../../../hooks/useWindowWidth';
import { SignInTitle } from './LoginTitles';
import styled from 'styled-components';
import {
  betweenCenter,
  centerCenter,
  grey,
  yellow
} from '../../../../utilities';
import { FaGoogle } from 'react-icons/fa';

const SignIn = ({ history }) => {
  const titleIsVisible = useWindowWidth() <= 768 && <SignInTitle />;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //* Login to firebase with email and password
  const handleLogin = async e => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/reserve');
    } catch (error) {
      alert(error.message);
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
        />
        <span />
      </InputWrap>
      <div>
        <ForgotBtn>
          <p>Forgot your password?</p>
        </ForgotBtn>
      </div>
      <BtnsWrap>
        <Button type="submit">
          <span>Sign In</span>
        </Button>
        <Button type="submit">
          <span>
            <FaGoogle />
          </span>
        </Button>
      </BtnsWrap>
    </StyledForm>
  );
};

export default withRouter(SignIn);

const BtnsWrap = styled.div`
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
`;

const ForgotBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${grey};
  height: 1rem;

  &:hover {
    color: ${yellow};
  }
`;
