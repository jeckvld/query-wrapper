import React from 'react';

import { Consumer } from './context';
import { useQuery } from './hooks';

const QueryBase = ({ axios, query, children, options }) => {
  const { data, error, loading } = useQuery({ axios, query, options });

  return typeof children === 'function'
    ? children({ data, error, loading })
    : children;
};

const Query = ({ query, children }) => (
  <Consumer>
    {({ axios, options }) => (
      <QueryBase axios={axios} options={options} query={query}>
        {children}
      </QueryBase>
    )}
  </Consumer>
);

export default Query;
