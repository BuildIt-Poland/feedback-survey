import React from 'react';
import { Select } from 'grommet';

const CustomSelect = ({ options, ...rest }) => {
  return <Select options={options} {...rest} />;
};

export default CustomSelect;
