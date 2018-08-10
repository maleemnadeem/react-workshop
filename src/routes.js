import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from 'modules/App/App';
import ContactsDashboard from 'modules/ContactsDashboard/ContactsDashboard';
import TodoDashboard from 'modules/TodoDashboard/TodoDashboard';
import MyAccount from 'modules/MyAccount/MyAccount';

export default (
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/contacts/" component={ContactsDashboard} />
    <Route path="/todos/" component={TodoDashboard} />
    <Route path="/account/" component={MyAccount} />
  </Switch>
);
