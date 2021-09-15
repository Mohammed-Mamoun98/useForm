import React, { useState, useEffect } from 'react';
import { useForm } from './From.js';
import { useFetch } from './useFetch.js';
import { fields, validationSchema } from './fields.js';
import { Provider } from './ContextProvider.jsx';
import './style.css';

export default function App() {
  const [render, formik] = useForm({ fields, validationSchema });
  const url = 'https://jsonplaceholder.typicode.com/todos/gd1';
  const [fetchTodo, todo, loading, err] = useFetch(url);

  const onSuccess = res => {};

  useEffect(() => {
    fetchTodo({ onSuccess });
  }, []);

  return (
    <div>
      {JSON.stringify(formik.values)}
      {render(<button type="submit">test</button>)}
      {/* Everyone of them is maintaing it's own state  */}
      {/* <Provider /> */}
      {/* <Provider /> */}
      {/* {JSON.stringify({ todo, loading, err })} */}
    </div>
  );
}
