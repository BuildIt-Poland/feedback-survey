import React from 'react';
import { Grommet, Button } from 'grommet';
import { colorBlue, colorWhite, spacingLarge, spacingXLarge, fontMedium, fontWeightBold } from '../../styles/variables';

const theme = {
  button: {
    color: colorBlue,
    border: {
      radius: '0',
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

const SurveyButton = ({ label, type }) => {
  return (
    <Grommet theme={theme}>
      <Button label={label} color={colorBlue} type={type} hoverIndicator="background" size="large" />
    </Grommet>
  );
};

export default SurveyButton;
