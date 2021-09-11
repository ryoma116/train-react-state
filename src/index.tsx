import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./Routes";
import configureStore from "./state/store";
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
