import React from 'react';
import { useForm } from './From.js';
import { fields } from './fields.js';
import * as yup from 'yup';
import './style.css';
const validationSchema = yup.object().shape({
  name: yup
    .string('')
    .min(12, 'min is 12 chars')
    .required('Field is required'),
  age: yup.number().required('Field is required'),
  country: yup.string().required('Field is required')
});

export default function App() {
  const [render, formik] = useForm({ fields, validationSchema });
  return (
    <div>
      {JSON.stringify(formik.values)}
      {render(<button type="submit">test</button>)}
    </div>
  );
}
