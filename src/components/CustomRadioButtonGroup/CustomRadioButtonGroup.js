import React from 'react';
import { Box } from 'grommet';

import CustomRadioButton from '../CustomRadioButton';

const renderRadioButtons = (options, name, withIcon) => {
  return options.map(radio => (
    <CustomRadioButton
      key={radio.id}
      name={name}
      label={radio.label}
      id={radio.id}
      value={radio.value}
      withIcon={withIcon}
    />
  ));
};

const CustomRadioButtonGroup = function({ options = [], name = '', withIcon = false, ...rest }) {
  return (
    <Box direction="row-responsive" alignSelf="center" justify="between" wrap={true} {...rest}>
      {renderRadioButtons(options, name, withIcon)}
    </Box>
  );
};

export default CustomRadioButtonGroup;
