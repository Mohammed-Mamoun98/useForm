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
  const {
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldTouched,
    values,
    errors,
    touched
  } = formik;

  const getKeys = obj => Object.keys(obj);

  const hasError = fieldName => {
    const errosKeys = getKeys(errors);
    const touchedKeys = getKeys(touched);
    return errosKeys.includes(fieldName) && touchedKeys.includes(fieldName);
  };

  const render = useCallback(
    children => {
      return (
        <form
          onSubmit={formik.handleSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {JSON.stringify({ touched, errors })}
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
                      border: hasError(field.name) ? '1px red solid' : '',
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
    [formik.values, formik.errors, formik.touched]
  );
  return [render, formik];
};
