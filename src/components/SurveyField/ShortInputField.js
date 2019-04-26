import React from 'react';
import { FormField } from 'grommet';

import { fontWeightNormal, colorWhite } from '../../styles/variables';

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
  if (!field) {
    return null;
  }
  return (
    <FormField
      name={field.id.toString()}
      label={field.content}
      required={field.required}
      placeholder="Type your answer here"
    />
  );
};

export default ShortInputField;
