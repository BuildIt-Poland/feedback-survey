import React from 'react';

import { formField } from '../../types';
import CustomTextArea from '../CustomTextArea';
import StyledFormField from './StyledFormField';

const LonfInputField = ({ field }) => (
  <StyledFormField
    name={field.id}
    label={field.content}
    required={field.required}
    component={CustomTextArea}
    placeholder="Type your answer here"
  />
);

LonfInputField.propTypes = {
  field: formField.isRequired
};

export default LonfInputField;
