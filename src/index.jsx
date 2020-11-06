import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import MineSweeper from './components/Minesweeper';

import GlobalStyles from './global';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <MineSweeper rows={5} columns={5} mineCount={5} />
  </Provider>,
  document.getElementById('root')
);