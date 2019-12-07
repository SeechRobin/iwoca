import React from 'react';
import  { Route } from 'react-router';

import Dashboard from '../components/Dashboard/Dashboard';
import WithLayout from './components/WithLayout';


const renderPageWithLayout = (component) => (
  <WithLayout>
    {component}
  </WithLayout>
);

const routes = () => (
  <>
    <Route path="/" exact render={props => renderPageWithLayout(<Dashboard {...props} />)} />
  </>
);

export default routes;