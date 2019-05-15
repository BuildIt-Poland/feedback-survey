import React from 'react';
import { arrayOf } from 'prop-types';

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
  options: arrayOf(radioOption).isRequired
};

export default YesNoField;
