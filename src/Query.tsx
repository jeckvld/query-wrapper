import React, { FC, ReactChild } from 'react';

import { Consumer } from './context';
import { useQuery } from './hooks';

export interface ReactHookResult {
  data: object;
  error: Error;
  loading: boolean;
}

interface QueryBaseProps {
  axios(options: object): Promise<{ data: object }>;
  children?: (props: ReactHookResult) => any | ReactChild;
  options?: object;
  query?: { url: string };
}

const QueryBase: FC<QueryBaseProps> = ({ axios, query, children, options }) => {
  const { data, error, loading }: ReactHookResult = useQuery({ axios, query, options });

  return typeof children === 'function'
    ? children({ data, error, loading })
    : children;
};

export interface QueryProps {
  children?: (props: object) => ReactChild;
  query?: { url: string };
}

const Query: FC<QueryProps> = ({ query, children }) => (
  <Consumer>
    {({ axios, options }) => (
      <QueryBase axios={axios} options={options} query={query}>
        {children}
      </QueryBase>
    )}
  </Consumer>
);

export default Query;
