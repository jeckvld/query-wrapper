import React from 'react';
import { Query } from 'query-wrapper';

const query = { url: 'https://jsonplaceholder.typicode.com/todos/1' };

const App = () => (
  <Query query={query}>
    {({ data, error, loading }) => {
      if (loading) {
        return <p>loading...</p>;
      }

      if (error) {
        return <p>{error.message}</p>;
      }

      return <p>todo title: {data.title}</p>;
    }}
  </Query>
);

export default App;
