import React from 'react';
import { FormField } from 'grommet';

import CustomSelect from '../CustomSelect';

const SelectField = ({ field, options }) => {
  if (!field) {
    return null;
  }
  return (
    <FormField
      name={field.id.toString()}
      label={field.content}
      required={field.required}
      component={CustomSelect}
      options={options}
      placeholder="Select"
    />
  );
};

export default SelectField;
