import React from 'react';

export const { Provider, Consumer } = React.createContext({
  axios: null,
  options: {}
});

