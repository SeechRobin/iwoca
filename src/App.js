import * as React from 'react';
import { Router } from 'react-router';

import Routes from './routes/index';

const createHistory = require("history").createBrowserHistory

export const history = createHistory();

const App = () => (
  <React.Fragment>
    <Router history={history}>
      <Routes />
    </Router>
  </React.Fragment>
);

export default App;

