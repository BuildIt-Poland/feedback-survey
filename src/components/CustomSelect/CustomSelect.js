import React from 'react';
import { string, arrayOf } from 'prop-types';
import { Select } from 'grommet';

const CustomSelect = ({ options, ...rest }) => <Select options={options} {...rest} />;

CustomSelect.protoTypes = {
  options: arrayOf(string).isRequired
};

export default CustomSelect;
