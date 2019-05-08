import React from 'react';
import { arrayOf } from 'prop-types';

import { formField, radioOption } from '../../types';
import CustomRadioButtonGroup from '../CustomRadioButtonGroup';
import StyledFormField from './StyledFormField';

const RatingField = ({ field, options }) => (
  <StyledFormField
    name={field.id}
    label={field.content}
    required={field.required}
    component={CustomRadioButtonGroup}
    options={options}
    direction="row-responsive"
    width="48rem"
    withIcon
    noBorderBottom
  />
);

RatingField.propTypes = {
  field: formField.isRequired,
  options: arrayOf(radioOption).isRequired
};

export default RatingField;
