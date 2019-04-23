import React from 'react';
import { FormField } from 'grommet';

import CustomRadioButtonGroup from '../CustomRadioButtonGroup';

const YesNoField = function({ field, options }) {
  if (!field) {
    return null;
  }
  return (
    <FormField
      name={field.id.toString()}
      label={field.content}
      required={field.required}
      component={CustomRadioButtonGroup}
      options={options}
      width="medium"
      withIcon={false}
    />
  );
};

export default YesNoField;
