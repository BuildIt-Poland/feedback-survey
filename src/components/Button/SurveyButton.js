import React from 'react';
import { Grommet, Button } from 'grommet';
import { string } from 'prop-types';

import {
  colorBlue,
  colorWhite,
  spacingLarge,
  spacingXLarge,
  fontMedium,
  fontWeightBold
} from '../../styles/designTokens';

const theme = {
  button: {
    color: colorBlue,
    border: {
      radius: '1rem',
      color: colorBlue
    },
    extend: {
      ':hover': {
        'background-color': colorBlue,
        'box-shadow': 'none',
        color: colorWhite
      },
      'font-size': fontMedium,
      'font-weight': fontWeightBold,
      margin: '1rem auto'
    },
    padding: {
      horizontal: spacingXLarge,
      vertical: spacingLarge
    }
  }
};

const SurveyButton = ({ label, buttonType = 'button' }) => (
  <Grommet theme={theme}>
    <Button label={label} color={colorBlue} type={buttonType} hoverIndicator="background" size="large" />
  </Grommet>
);

SurveyButton.protoTypes = {
  label: string.isRequired,
  buttonType: string
};

export default SurveyButton;
