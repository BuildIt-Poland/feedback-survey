import React from 'react';
import { string, func } from 'prop-types';

import { formField } from '../../types';
import CustomTextArea from '../CustomTextArea';
import StyledFormField from './StyledFormField';

const LonfInputField = ({ field, value, error, onChange }) => (
  <StyledFormField
    label={field.content}
    required={field.required}
    component={CustomTextArea}
    placeholder="Type your answer here"
    error={error}
  >
    <CustomTextArea name={field.name} value={value} onChange={onChange} />
  </StyledFormField>
);

LonfInputField.propTypes = {
  field: formField.isRequired,
  value: string,
  error: string,
  onChange: func
};

export default LonfInputField;
