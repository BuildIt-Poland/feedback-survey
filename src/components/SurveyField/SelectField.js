import React from 'react';
import PropTypes, { string } from 'prop-types';

import { formField } from '../../types';
import CustomSelect from '../CustomSelect';
import StyledFormField from './StyledFormField';

const SelectField = ({ field, options }) => (
  <StyledFormField
    name={field.id}
    label={field.content}
    required={field.required}
    component={CustomSelect}
    options={options}
    placeholder="Select"
  />
);

SelectField.propTypes = {
  field: formField.isRequired,
  options: PropTypes.arrayOf(string)
};

export default SelectField;
