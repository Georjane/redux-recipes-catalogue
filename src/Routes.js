import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
// import Navbar from './components/Navbar';
import Details from './components/Details';

const Routes = () => (
  <BrowserRouter>
    {/* <Navbar /> */}
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/details" component={Details} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
