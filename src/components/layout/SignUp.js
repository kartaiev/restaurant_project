import React from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../../config/fbConfig';
import { Button, StyledForm, Subtitle } from '../../elements';
import { createUserProfileDocument } from '../../contexts/AuthContext';

const SignUp = ({ history }) => {
  const handleSignUp = async e => {
    e.preventDefault();
    const { email, password, displayName } = e.target.elements;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email.value,
        password.value
      );

      await createUserProfileDocument(user, { displayName: displayName.value });

      history.push('/reserve');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <StyledForm onSubmit={handleSignUp}>
      <Subtitle>Hello, friend!</Subtitle>
      <p>Sign up to reserve a table</p>
      <div>
        <input
          name="displayName"
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
