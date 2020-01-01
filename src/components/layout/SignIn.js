import React from 'react';
import { Button } from '../../elements';
import styled from 'styled-components';
import { absolute, background, easeOut, grey, red } from '../../utilities';

const SignIn = () => {
  return (
    <Sign>
      <div>
        <input name="email" type="email" required placeholder="email" />
        <span />
      </div>
      <div>
        <input
          name="password"
          type="password"
          required
          placeholder="password"
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
    height: 30%;
    position: relative;

    input {
      width: 100%;
      height: 100%;
      background: ${background};
      border: none;
      color: ${grey};
      ${easeOut};
      outline: none;
      padding: 5px 0 5px 0;

      &:focus + span::after,
      &:valid + span::after {
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
      pointer-events: none;

      &::after {
        content: '';
        height: 1px;
        width: 100%;
        ${absolute({ yProp: 'bottom', y: '0' })};
        background-image: linear-gradient(to right, ${red} 50%, ${grey} 50%);
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
