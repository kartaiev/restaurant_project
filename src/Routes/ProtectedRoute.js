import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedRoute = ({ component: Comp, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (

    <Route
      {...rest}
      render={props =>
        currentUser ? <Comp {...props} /> : <Redirect to={'/login'} />
      }
    />
  );
};

export default ProtectedRoute;
