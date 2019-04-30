import React from 'react';
import { arrayOf } from 'prop-types';

import { formField, radioOption } from '../../types';
import CustomRadioButtonGroup from '../CustomRadioButtonGroup';
import StyledFormField from './StyledFormField';

const YesNoField = ({ field, options }) => (
  <StyledFormField
    name={field.id}
    label={field.content}
    required={field.required}
    component={CustomRadioButtonGroup}
    options={options}
    width="medium"
  />
);

YesNoField.propTypes = {
  field: formField.isRequired,
  options: arrayOf(radioOption).isRequired
};

export default YesNoField;
