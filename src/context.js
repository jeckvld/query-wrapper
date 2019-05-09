import { createContext } from 'react';

export const { Provider, Consumer } = createContext({
  axios: null,
  options: {}
});
