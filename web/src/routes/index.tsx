import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Import from '../pages/Import';
import List from '../pages/List';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={List} exact />
      <Route path="/import" component={Import} />
    </Switch>
  );
};

export default Routes;
