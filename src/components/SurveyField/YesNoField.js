import React from 'react';
import { FormField, RadioButtonGroup } from 'grommet';

const YesNoField = function({ field, options }) {
  return (
    <FormField
      name={field.id.toString()}
      label={field.content}
      required={field.required}
      component={RadioButtonGroup}
      options={options}
    />
  );
};

export default YesNoField;
