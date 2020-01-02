import React from 'react';
import { AiFillFacebook, AiFillGoogleSquare } from 'react-icons/ai';
import { Button, Subtitle } from '../../elements';
import styled from 'styled-components';
import { signInWithGoogle } from '../../config/fbConfig';
import {
  absolute,
  background,
  centerCenter,
  easeOut,
  grey,
  red,
  yellow
} from '../../utilities';

const SignIn = () => {
  return (
    <Sign>
      <Subtitle>Welcome back!</Subtitle>
      <p>Sign in to reserve a table</p>
      <Social>
        <AiFillFacebook>
          <button />
        </AiFillFacebook>
        <AiFillGoogleSquare>
          <button onClick={signInWithGoogle} />
        </AiFillGoogleSquare>
      </Social>
      <div>
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          autoComplete="off"
        />
        <span />
      </div>
      <div>
        <input
          name="password"
          type="password"
          required
          placeholder="Password"
        />
        <span />
      </div>
      <Button modifiers="big">
        <span>Sign In</span>
      </Button>
    </Sign>
  );
};

export default SignIn;

const Sign = styled.form`
  width: 100%;
  height: 45vh;

  div {
    width: 100%;
    height: 7vh;
    position: relative;
    margin: 5vh 0;

    input {
      width: 100%;
      height: 100%;
      background: ${background};
      border: none;
      color: ${grey};
      ${easeOut};
      outline: none;

      &:focus + span,
      &:valid + span {
        background-position: left center;
      }

      &::placeholder {
        color: ${grey};
        z-index: 200;
      }
    }
    span {
      width: 100%;
      height: 1px;
      ${absolute({ yProp: 'bottom', y: '0' })};
      background-image: linear-gradient(to right, ${red} 50%, ${grey} 50%);
      background-size: 200% 100%;
      background-position: right center;
      ${easeOut};
    }
  }
`;

const Social = styled.div`
  width: 100%;
  ${centerCenter} {
    svg {
      width: 40px;
      height: 40px;
      padding: 0 15%;

      &:hover {
        fill: ${yellow};
        cursor: pointer;
      }
    }
  }
`;
