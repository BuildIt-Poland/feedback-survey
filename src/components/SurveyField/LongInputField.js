import React from 'react';
import { FormField } from 'grommet';

import { formField } from '../../types';
import CustomTextArea from '../CustomTextArea';

const LonfInputField = ({ field }) => (
  <FormField
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
