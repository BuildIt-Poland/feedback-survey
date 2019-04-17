import React from 'react';
import { FormField, RadioButtonGroup } from 'grommet';

const RatingField = function({ field, options }) {
  return (
    <FormField
      name={field.id.toString()}
      label={field.content}
      required={field.required}
      component={RadioButtonGroup}
      options={options}
      direction="row-responsive"
    />
  );
};

export default RatingField;
