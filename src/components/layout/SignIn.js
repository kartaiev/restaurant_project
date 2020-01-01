import React from 'react';
import { Button } from '../../elements';
import styled from 'styled-components';
import { absolute, background, easeOut, grey, red } from '../../utilities';

const SignIn = () => {
  return (
    <Sign>
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
  height: 40vh;
  margin-top: 20vh;

  div {
    width: 100%;
    height: 7vh;
    position: relative;
    margin-bottom: 5vh;

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

      &:-webkit-autofill {
        background: ${background} !important;
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
