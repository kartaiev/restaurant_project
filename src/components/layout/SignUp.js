import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../../config/fbConfig';
import { Button, StyledForm, Subtitle } from '../../elements';
import { createUserProfileDocument } from '../../contexts/AuthContext';

const SignUp = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const handleSignUp = async e => {
    e.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, {
        displayName: displayName
      });

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
          onChange={e => setDisplayName(e.target.value)}
          name="displayName"
          type="text"
          value={displayName}
          required
          placeholder="Name"
          autoComplete="off"
        />
        <span />
      </div>
      <div>
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
      </div>
      <div>
        <input
          onChange={e => setPassword(e.target.value)}
          name="password"
          type="password"
          value={password}
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
