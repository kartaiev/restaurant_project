import React from 'react';
import { Button } from '../../elements';
import styled from 'styled-components';
import {
  absolute,
  background,
  easeOut,
  grey,
  red,
  yellow
} from '../../utilities';

const SignIn = () => {
  return (
    <Sign>
      <div>
        <input name="email" type="email" required placeholder="email" />
        <label htmlFor="email" />
      </div>
      <div>
        <input
          name="password"
          type="password"
          required
          placeholder="password"
        />
        <label htmlFor="password" />
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
    height: 30%;
    position: relative;

    input {
      width: 100%;
      height: 100%;
      background: ${background};
      border: none;
      color: ${grey};
      padding-top: 25px;
      ${easeOut};

      &:focus + label::after,
      &:valid + label::after {
        background-position: left center;
      }

      &::placeholder {
        color: ${grey};
      }
    }
    label {
      width: 100%;
      height: 100%;
      ${absolute({ yProp: 'bottom', y: '0' })};
      pointer-events: none;

      &::after {
        content: '';
        height: 1px;
        width: 100%;
        ${absolute({ yProp: 'bottom', y: '0' })};
        background-image: linear-gradient(to right, ${red} 50%, ${yellow} 50%);
        background-size: 200% 100%;
        background-position: right center;
        ${easeOut};
      }
    }
  }

  button {
    margin-top: 5vh;
  }
`;
