import React from 'react';
import { FormField, RadioButtonGroup } from 'grommet';

const RatingField = function({ field, options }) {
  return (
    <FormField
      name={field.id.toString()}
      label={field.content}
      required={true}
      component={RadioButtonGroup}
      options={options}
    />
  );
};

export default RatingField;
