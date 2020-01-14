import React from 'react';
import { Route } from 'react-router-dom';
import SelectTable from '../components/pages/Reserve/SelectTable';

export default () => <Route path="/tables" component={SelectTable} />;
