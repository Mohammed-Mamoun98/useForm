import React, { useState, useEffect } from 'react';
import { useForm } from './From.js';
import { useFetch } from './useFetch.js';
import { fields, validationSchema } from './fields.js';
import { Provider } from './ContextProvider.jsx';
import './style.css';

export default function App() {
  const [render, formik] = useForm({ fields, validationSchema });
  const url = 'https://jsonplaceholder.typicode.com/todos/gd1';
  const [fetchTodo, todo, loading, err] = useFetch(
    'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
  );

  const onSuccess = (res) => {};

  useEffect(() => {
    fetchTodo({ onSuccess });
  }, []);

  return (
    <div>
      {/* {JSON.stringify(formik.values)} */}
      {/* {render(<button type="submit">test</button>)} */}
      {/* Everyone of them is maintaing it's own state  */}
      {/* <Provider /> */}
      {/* <Provider /> */}
      {JSON.stringify({ a: todo?.ethereum?.usd, loading, err })}
    </div>
  );
}
