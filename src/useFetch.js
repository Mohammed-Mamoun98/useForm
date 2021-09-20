import { useState, useEffect } from 'react';

const sleep = (ms = 6000) => new Promise((res, rej) => setTimeout(res, ms));

export const useFetch = (url, baseConfig = {}) => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchReq = async (extraConfig = {}) => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const config = { ...baseConfig, ...extraConfig };
    setLoading(true);
    await sleep();
    fetch(url)
      .then((rawResponse) => rawResponse.json())
      .then((_response) => {
        setResponse(_response);
        // throw new Error('NETWORK ERROR');
        config.onSuccess?.(_response);
      })
      .catch((err) => {
        setError(err.message);
        setResponse({});
        config.onError?.(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (baseConfig.initReq) fetchReq();
  }, []);
  return [fetchReq, response, loading, error];
};
