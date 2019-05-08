import React from 'react';

import { formField } from '../../types';
import StyledFormField from './StyledFormField';

const ShortInputField = ({ field }) => (
  <StyledFormField
    name={field.id}
    label={field.content}
    required={field.required}
    placeholder="Type your answer here"
  />
);

ShortInputField.propTypes = {
  field: formField.isRequired
};

export default ShortInputField;
