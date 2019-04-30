import React from 'react';
import PropTypes from 'prop-types';

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
    withIcon={false}
  />
);

YesNoField.propTypes = {
  field: formField.isRequired,
  options: PropTypes.arrayOf(radioOption)
};

export default YesNoField;
