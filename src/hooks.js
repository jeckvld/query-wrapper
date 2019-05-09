import { useEffect, useState } from 'react';

export const useQuery = ({ axios, query, options: baseOptions }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query && query.url) {
      const options = { ...baseOptions, ...query };

      setLoading(true);

      if (axios) {
        axios(options)
          .then(({ data }) => setData(data))
          .catch(setError)
          .finally(() => setLoading(false));
      } else {
        const { url, ...restOptions } = options;

        fetch(url, restOptions)
          .then(res => res.json())
          .then(setData)
          .catch(setError)
          .finally(() => setLoading(false));
      }
    }
  }, [axios, baseOptions, query, setLoading, setData, setError]);

  return { data, error, loading };
};
