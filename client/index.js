'use strict';

import { Provider } from 'react-redux';
import store from './store';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Test from './components/Test';


ReactDOM.render(
  <Provider store={store}>
    <Test />
  </Provider>,
  document.getElementById('app')
);
