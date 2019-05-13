import React from 'react';
import styled from 'styled-components';
import { Button } from 'grommet';
import { string } from 'prop-types';

import { colorBlue, colorWhite, spacingLarge, spacingXLarge, fontMedium } from '../../styles/designTokens';
import media from '../../styles/media';

const StyledButton = styled(Button)`
  color: ${colorBlue};
  border-radius: 1rem;
  border-color: ${colorBlue};
  margin: 1rem auto;
  padding: 2rem 4rem;
  font-size: 1.8rem;

  :hover {
    background-color: ${colorBlue};
    color: ${colorWhite};
  }

  ${media.tablet`
    padding: ${spacingLarge} ${spacingXLarge};
    font-size: ${fontMedium};
  `}
`;

const SurveyButton = ({ label, buttonType = 'button' }) => (
  <StyledButton label={label} color={colorBlue} type={buttonType} hoverIndicator="background" size="large" />
);

SurveyButton.protoTypes = {
  label: string.isRequired,
  buttonType: string
};

export default SurveyButton;
