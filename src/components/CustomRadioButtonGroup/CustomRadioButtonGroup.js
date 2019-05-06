import React from 'react';
import { bool, string, arrayOf } from 'prop-types';
import { Box } from 'grommet';

import CustomRadioButton from '../CustomRadioButton';
import { radioOption } from '../../types';

const renderRadioButtons = (options, name, withIcon) =>
  options.map(radio => <CustomRadioButton key={radio.id} name={name} radio={radio} withIcon={withIcon} />);

const CustomRadioButtonGroup = ({ options, name, withIcon = false, ...rest }) => (
  <Box direction="row-responsive" alignSelf="center" justify="between" wrap={true} {...rest}>
    {renderRadioButtons(options, name, withIcon)}
  </Box>
);

CustomRadioButtonGroup.propTypes = {
  options: arrayOf(radioOption).isRequired,
  name: string.isRequired,
  withIcon: bool
};

export default CustomRadioButtonGroup;
