import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { createStore } from 'redux';
import Routes from './Routes';
import filterReducer from './reducers/filter';

const store = createStore(filterReducer);
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
