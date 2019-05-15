import React from 'react';
import PropTypes, { string } from 'prop-types';

import { formField } from '../../types';
import CustomSelect from '../CustomSelect';
import StyledFormField from './StyledFormField';

const SelectField = ({ field, options, value, error, setFieldValue }) => (
  <StyledFormField label={field.content} required={field.required} options={options} placeholder="Select" error={error}>
    <CustomSelect
      options={options}
      name={field.name}
      value={value}
      onChange={e => setFieldValue(field.name, e.value)}
    />
  </StyledFormField>
);

SelectField.propTypes = {
  field: formField.isRequired,
  options: PropTypes.arrayOf(string)
};

export default SelectField;
