import React from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../../config/fbConfig';
import { Button, StyledForm, Subtitle } from '../../elements';

const SignUp = ({ history }) => {
  const handleSignUp = async e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await auth.createUserWithEmailAndPassword(email.value, password.value);
      history.push('/reserve');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <StyledForm onSubmit={handleSignUp}>
      <Subtitle>Hello, friend!</Subtitle>
      <p>Sign up to reserve a table</p>
      <div>
        <input
          name="name"
          type="text"
          required
          placeholder="Name"
          autoComplete="off"
        />
        <span />
      </div>
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
      <Button modifiers="big" type="submit">
        <span>Sign Up</span>
      </Button>
    </StyledForm>
  );
};

export default withRouter(SignUp);
