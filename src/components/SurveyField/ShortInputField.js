import React from 'react';
import { FormField } from 'grommet';

import { fontWeightNormal, colorWhite } from '../../styles/variables';
import { formField } from '../../types';

export const inputTheme = {
  global: {
    input: {
      weight: fontWeightNormal
    },
    focus: {
      border: {
        color: colorWhite
      }
    }
  }
};

const ShortInputField = ({ field }) => {
  return (
    <FormField name={field.id} label={field.content} required={field.required} placeholder="Type your answer here" />
  );
};

ShortInputField.propTypes = {
  field: formField.isRequired
};

export default ShortInputField;
