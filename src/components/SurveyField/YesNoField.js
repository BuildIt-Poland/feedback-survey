import React from 'react';
import { arrayOf, string, func } from 'prop-types';

import { formField, radioOption } from '../../types';
import CustomRadioButtonGroup from '../CustomRadioButtonGroup';
import StyledFormField from './StyledFormField';

const YesNoField = ({ field, options, value, error, onChange }) => (
  <StyledFormField
    label={field.content}
    required={field.required}
    options={options}
    width="medium"
    error={error}
    noBorderBottom
  >
    <CustomRadioButtonGroup options={options} name={field.name} value={value} onChange={onChange} />
  </StyledFormField>
);

YesNoField.propTypes = {
  field: formField.isRequired,
  options: arrayOf(radioOption).isRequired,
  value: string,
  error: string,
  onChange: func
};

export default YesNoField;
