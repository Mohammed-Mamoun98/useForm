import React from 'react';
import { useForm } from './From.js';
import { fields } from './fields.js';
import './style.css';

export default function App() {
  const [Render, formik] = useForm({ fields });
  return (
    <div>
      {JSON.stringify(formik.values)}
      <Render />
    </div>
  );
}
