import React from 'react';
import PropTypes, { string } from 'prop-types';
import { FormField } from 'grommet';

import { formField } from '../../types';
import CustomSelect from '../CustomSelect';

const SelectField = ({ field, options }) => (
  <FormField
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
