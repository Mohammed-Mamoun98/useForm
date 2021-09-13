import React from 'react';
import { useForm } from './From.js';
import { fields, validationSchema } from './fields.js';
import './style.css';

export default function App() {
  const [render, formik] = useForm({ fields, validationSchema });
  return (
    <div>
      {JSON.stringify(formik.values)}
      {render(<button type="submit">test</button>)}
    </div>
  );
}
