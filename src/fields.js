import React from 'react';
export const fields = [
  {
    name: 'name',
    placeholder: 'Name'
  },
  {
    name: 'age',
    type: 'number',
    placeholder: 'Age'
  },
  {
    name: 'country',
    type: 'select',
    placeholder: 'Country',
    render: formik => (
      <select
        onChange={e => {
          console.log({ e: e.target.value });
          formik.setFieldValue('country', e.target.value);
        }}
        value={formik.values?.country}
      >
        <option selected disabled>
          Select Option
        </option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    )
  }
];
