import React, { useCallback } from 'react';
import { useFormik } from 'formik';

export const useForm = ({ fields = [], initialValues = {}, ...rest }) => {
  const formik = useFormik({
    values: initialValues || {},
    initialValues,
    ...rest
  });
  const { handleChange, handleBlur, setFieldValue, values } = formik;
  const Render = useCallback(() => {
    console.log('render');
    return (
      <>
        {fields.map(field => (
          <>
            {field?.render ? (
              field?.render(formik)
            ) : (
              <input
                {...field}
                name={field.name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.[field.name]}
              />
            )}
          </>
        ))}
      </>
    );
  }, []);
  return [Render, formik];
};
