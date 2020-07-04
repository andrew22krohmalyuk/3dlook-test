import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main } from './index';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
