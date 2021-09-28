import React, { useState, useEffect } from 'react';
import { useForm } from './From.js';
import { useFetch } from './useFetch.js';
import { usePromise } from './usePromise.js';
import { fields, validationSchema } from './fields.js';
import { Provider } from './ContextProvider.jsx';
import './style.css';

export default function App() {
  const [render, formik] = useForm({ fields, validationSchema });
  const url = 'https://jsonplaceholder.typicode.com/todos/gd1';
  const [fetchTodo, todo, loading, err] = useFetch(
    'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
  );

  const [input, setInpout] = useState('');
  const [_data, _setData] = useState('');
  const [count, setCount] = useState(0);

  const sleep = (ms = 2000) =>
    new Promise((res, rej) => setTimeout(() => res('TEST'), ms));

  const [execPrmoise, promiseRes, _loading, _err] = usePromise(sleep);

  const readData = (key) => localStorage.getItem(key);
  const setData = () => localStorage.setItem('test', input);

  const onSuccess = (res) => {};

  const onChange = ({ target: { value } }) => setInpout(value);

  useEffect(() => {
    // fetchTodo({ onSuccess });

    // window.addEventListener('storage', () => {
    //   // When local storage changes, dump the list to
    //   // the console.
    //   _setData(window.localStorage.getItem('test'));
    // });
    if (count) execPrmoise();
  }, [count]);
  const data = readData('test');

  return (
    <div>
      {JSON.stringify({ promiseRes, _loading, _err })}
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      {count}
      {/* {JSON.stringify({ a: todo?.ethereum?.usd, loading, err })} */}
    </div>
  );
}
