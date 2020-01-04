import React, { useContext } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { auth } from '../../config/fbConfig';
import { AuthContext } from '../../contexts/AuthContext';
import { Button, StyledForm, Subtitle } from '../../elements';

const SignIn = ({ history }) => {
  const handleLogin = async e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await auth.signInWithEmailAndPassword(email.value, password.value);
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
    <StyledForm onSubmit={handleLogin}>
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
      <Button modifiers="big" type="submit">
        <span>Sign In</span>
      </Button>
    </StyledForm>
  );
};

export default withRouter(SignIn);
