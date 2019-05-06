import React from 'react';
import { FormField } from 'grommet';

import { formField } from '../../types';

const ShortInputField = ({ field }) => (
  <FormField name={field.id} label={field.content} required={field.required} placeholder="Type your answer here" />
);

ShortInputField.propTypes = {
  field: formField.isRequired
};

export default ShortInputField;
