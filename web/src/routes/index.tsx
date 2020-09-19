import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Import from '../pages/Import';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/import" component={Import} />
    </Switch>
  );
};

export default Routes;
