import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Details from './containers/Details';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/details" component={Details} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
