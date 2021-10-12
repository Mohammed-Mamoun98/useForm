import React, { useState, useEffect } from 'react';
import { useForm } from './From.js';
import { useFetch } from './useFetch.js';
import { usePromise } from './usePromise.js';
import { fields, validationSchema } from './fields.js';
import { Provider } from './ContextProvider.jsx';
import './objectMapper.js';
import './style.css';
const Comp = ({ prop, ...rest }) => {
  console.log({ rest: rest.a });
  return <></>;
};

const promise = () =>
  new Promise((res, rej) => {
    console.log('first Prmise');
    setTimeout(() => {
      return new Promise((res) => setTimeout(() => res(5), 1000)).then(
        (value) => res(value)
      );
    }, 2000);
  });

const multiParamFunction = (param1, parm2) => {};

function multiParam(...rest) {
  console.log({ rest });
}
multiParam(1, 2, 3);

multiParamFunction(...[1, 2]);

export default function App() {
  const [render, formik] = useForm({ fields, validationSchema });
  const url = 'https://jsonplaceholder.typicode.com/todos/gd1';
  // const [fetchTodo, todo, loading, err] = useFetch(
  //   'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
  // );

  const [getThing, thing, loading, err] = usePromise(promise, {
    onSuccess: (value) => alert('we got this' + value),
  });

  // const [input, setInpout] = useState('');
  // const [_data, _setData] = useState('');
  // const [count, setCount] = useState(0);

  // const sleep = (ms = 2000) =>
  //   new Promise((res, rej) => setTimeout(() => res('TEST'), ms));

  // const [execPrmoise, promiseRes, _loading, _err] = usePromise(sleep);

  // const readData = (key) => localStorage.getItem(key);
  // const setData = () => localStorage.setItem('test', input);

  // const onSuccess = (res) => {};

  // const onChange = ({ target: { value } }) => setInpout(value);

  const handleBlur = ({ target: { name, value } }) => {};

  return (
    <div>
      <button onClick={getThing}>fetcha</button>
      {JSON.stringify({ thing, loading, err })}
      <Comp a={1} b={2} />
      {/* {JSON.stringify({ promiseRes, _loading, _err })}
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      {count}
      <input onBlur={handleBlur} name="test" /> */}
      {/* {JSON.stringify({ a: todo?.ethereum?.usd, loading, err })} */}
    </div>
  );
}
