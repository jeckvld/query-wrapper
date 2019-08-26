import React, { FC, ReactChild } from 'react';

import { Provider } from './context';

export interface QueryProviderProps {
  axios(options: object): Promise<{ data: object }>;
  options: object;
  children?: ReactChild;
}

const QueryProvider: FC<QueryProviderProps> = ({
  axios,
  options,
  children
}) => <Provider value={{ axios, options }}>{children}</Provider>;

export default QueryProvider;
