import React from 'react';
import Reserve from '../components/pages/Reserve';
import ProtectedRoute from './ProtectedRoute';

export default () => <ProtectedRoute path="/reserve" component={Reserve} />;
