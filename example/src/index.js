import React from 'react';
import ReactDOM from 'react-dom';
import { QueryProvider } from 'query-wrapper';

import App from './App';

const options = {
  headers: {
    'Content-Type': 'application/json'
  }
};

ReactDOM.render(
  <QueryProvider options={options}>
    <App />
  </QueryProvider>,
  document.getElementById('root')
);
