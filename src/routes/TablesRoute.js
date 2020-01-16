import React from 'react';
import { Route } from 'react-router-dom';
import SelectTable from '../pages/Reserve/SelectTable';

export default () => <Route path="/tables" component={SelectTable} />;
