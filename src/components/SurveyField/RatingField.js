import React from 'react';
import { arrayOf, string, func } from 'prop-types';

import { formField, radioOption } from '../../types';
import CustomRadioButtonGroup from '../CustomRadioButtonGroup';
import StyledFormField from './StyledFormField';

const RatingField = ({ field, options, value, error, onChange }) => (
  <StyledFormField
    label={field.content}
    required={field.required}
    component={CustomRadioButtonGroup}
    options={options}
    direction="row-responsive"
    width="48rem"
    error={error}
    noBorderBottom
  >
    <CustomRadioButtonGroup options={options} name={field.name} value={value} onChange={onChange} withIcon />
  </StyledFormField>
);

RatingField.propTypes = {
  field: formField.isRequired,
  options: arrayOf(radioOption).isRequired,
  value: string,
  error: string,
  onChange: func
};

export default RatingField;
