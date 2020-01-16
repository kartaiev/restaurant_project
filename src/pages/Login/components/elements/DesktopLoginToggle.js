import React from 'react';
import { Button, Subtitle } from '../../../../elements';
import {
  LoginToggleContainer,
  LoginToggleContent,
  LoginToggleMessages
} from './LoginContainers';

const DesktopLoginToggle = ({ on, toggle }) => {
  const message1 =
    'In order to reserve a table you you must have an account. Would you like to create one?';
  const message2 =
    'Do you have an account already? What are you waiting for? Login!';
  return (
    <LoginToggleContainer>
      <LoginToggleContent>
        <Subtitle>Hello, friend!</Subtitle>
        <LoginToggleMessages>
          <p>{on ? message1 : message2}</p>
        </LoginToggleMessages>

        <Button modifiers="big" onClick={toggle}>
          <span>{on ? 'Create an account' : 'Log into your account'}</span>
        </Button>
      </LoginToggleContent>
    </LoginToggleContainer>
  );
};

export default DesktopLoginToggle;
