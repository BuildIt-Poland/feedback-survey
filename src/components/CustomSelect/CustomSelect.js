import React from 'react';
import { Select } from 'grommet';

const CustomSelect = function({ options, ...rest }) {
  return <Select options={options} {...rest} />;
};

export default CustomSelect;
