import React from 'react';

import { Button, Subtitle } from '../../elements';
import styled from 'styled-components';

import { absolute, background, easeOut, grey, red } from '../../utilities';

const SignIn = () => {
  return (
    <Sign>
      <Subtitle>Welcome back!</Subtitle>
      <p>Sign in to reserve a table</p>
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
