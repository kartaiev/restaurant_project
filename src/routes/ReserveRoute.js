import React from 'react';
import Reserve from '../pages/Reserve/Reserve';
import ProtectedRoute from './ProtectedRoute';

export default () => {
  return <ProtectedRoute path="/reserve" component={Reserve} />;
};
