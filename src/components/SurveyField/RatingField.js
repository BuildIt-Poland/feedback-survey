import React from 'react';
import { FormField } from 'grommet';

import CustomRadioButtonGroup from '../CustomRadioButtonGroup';

const RatingField = ({ field, options }) => {
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
      direction="row-responsive"
      width="48rem"
      withIcon={true}
    />
  );
};

export default RatingField;
