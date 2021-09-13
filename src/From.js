import React, { useCallback } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

export const useForm = ({
  fields = [],
  initialValues = {},
  onSubmit = () => {},
  ...rest
}) => {
  const handleSubmit = values => {
    onSubmit(values);
  };
  const formik = useFormik({
    values: initialValues || {},
    initialValues,
    onSubmit: handleSubmit,
    ...rest
  });
  const { handleChange, handleBlur, setFieldValue, values, errors } = formik;

  const render = useCallback(
    children => {
      console.log('render');
      return (
        <form
          onSubmit={formik.handleSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {fields.map(field => (
            <>
              {field?.render ? (
                field?.render(formik)
              ) : (
                <>
                  <input
                    key={field.name}
                    {...field}
                    name={field.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.[field.name]}
                    style={{
                      border: errors?.[field.name] ? '1px red solid' : '',
                      outline: 'none'
                    }}
                  />
                </>
              )}
            </>
          ))}
          {children}
        </form>
      );
    },
    [formik.values, formik.errors]
  );
  return [render, formik];
};
