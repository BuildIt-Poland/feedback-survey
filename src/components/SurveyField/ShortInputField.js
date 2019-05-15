import React from 'react';
import { TextInput } from 'grommet';

import { formField } from '../../types';
import StyledFormField from './StyledFormField';

const ShortInputField = ({ field, value, error, onChange }) => (
  <StyledFormField label={field.content} required={field.required} placeholder="Type your answer here" error={error}>
    <TextInput name={field.name} value={value} onChange={onChange} />
  </StyledFormField>
);

ShortInputField.propTypes = {
  field: formField.isRequired
};

export default ShortInputField;
