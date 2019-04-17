import React from 'react';
import { FormField, Select } from 'grommet';

const SelectField = function({ field, options }) {
  return (
    <FormField
      name={field.id.toString()}
      label={field.content}
      required={field.required}
      component={Select}
      options={options}
      placeholder="Select"
    />
  );
};

export default SelectField;
