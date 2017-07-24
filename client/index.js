'use strict';

import { Provider } from 'react-redux';
import store from './store';
import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <Provider store={store}>
    {/* rest of your app goes here! */}
  </Provider>,
  document.getElementById('app')
);
