import React from 'react';

import { Provider } from './context';

const QueryProvider = ({ axios, options, children }) => (
  <Provider value={{ axios, options }}>{children}</Provider>
);

export default QueryProvider;
