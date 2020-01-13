import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { Toggle } from '../utilities';

const ProtectedRoute = ({ component: Comp, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Toggle>
      {({ on, toggle }) => (
        <Route
          {...rest}
          render={props =>
            currentUser ? (
              <Comp {...props} on={on} toggle={toggle} />
            ) : (
              <Redirect to={'/login'} />
            )
          }
        />
      )}
    </Toggle>
  );
};

export default ProtectedRoute;
