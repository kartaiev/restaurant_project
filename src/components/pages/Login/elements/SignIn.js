import React, { useContext, useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { auth } from '../../../../config/fbConfig';
import { AuthContext } from '../../../../contexts/AuthContext';
import { Button, StyledForm, Subtitle } from '../../../../elements';

const SignIn = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async e => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
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
        <span>Sign In</span>
      </Button>
    </StyledForm>
  );
};

export default withRouter(SignIn);
