import { useState, useEffect } from 'react';

export const usePromise = (prmiseFunction = () => {}, baseConfig = {}) => {
  const [response, setResponse] = useState(baseConfig?.defaultRes);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const executePromise = () => {
    setLoading(true);
    prmiseFunction()
      .then((value) => {
        setResponse(value);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return [executePromise, response, loading, error];
};
