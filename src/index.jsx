import React from 'react';
import ReactDOM from 'react-dom';

import MineSweeper from './components/Minesweeper';

import GlobalStyles from './global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <MineSweeper />
  </React.StrictMode>,
  document.getElementById('root')
);