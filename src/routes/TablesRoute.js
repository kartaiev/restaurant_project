import React from 'react';
import { Route } from 'react-router-dom';
import ChooseTable from '../components/pages/Reserve/ChooseTable';

export default () => <Route path="/tables" component={ChooseTable} />;
