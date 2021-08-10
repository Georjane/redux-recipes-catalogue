import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import Routes from './Routes';
import filterReducer from './reducers/filter';
import apiMiddleware from './redux/apimiddleware';

const store = createStore(filterReducer, applyMiddleware(apiMiddleware));
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
