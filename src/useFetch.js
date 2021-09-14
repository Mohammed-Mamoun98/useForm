import { useState, useEffect } from 'react';

export const useFetch = (url, baseConfig = {}) => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchReq = (extraConfig = {}) => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const config = { ...baseConfig, ...extraConfig };
    setLoading(true);
    fetch(url)
      .then(rawResponse => rawResponse.json())
      .then(_response => {
        setResponse(_response);
        throw new Error('NETWORK ERROR');
        config.onSuccess?.(_response);
      })
      .catch(err => {
        setError(err.message);
        setResponse(null);
        config.onError?.(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return [fetchReq, response, loading, error];
};
