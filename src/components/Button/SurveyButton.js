import React from 'react';
import styled from 'styled-components';
import { Button } from 'grommet';
import { string } from 'prop-types';

import media from '../../styles/media';
import { fontSmall, colorBlue, colorWhite } from '../../styles/designTokens';

const StyledButton = styled(Button)`
  color: ${colorBlue};
  border-color: ${colorBlue};
  margin: 1rem auto;
  border-radius: 0.55rem;
  padding: 0.5rem 1.5rem;
  font-size: ${fontSmall};

  :hover {
    background-color: ${colorBlue};
    color: ${colorWhite};
  }

  :focus {
    box-shadow: 0 0 0.2rem 0.2rem ${colorBlue};
  }

  ${media.mobileM`
    padding: 1rem 2rem;
    font-size: 2rem;
  `};

  ${media.mobileL`
    border-radius: 0.8rem;
  `};

  ${media.tablet`
    padding: 1.5rem 3.5rem;
    font-size: 2.2rem;
  `};
`;

const SurveyButton = ({ label, buttonType = 'button' }) => (
  <StyledButton label={label} color={colorBlue} type={buttonType} hoverIndicator="background" size="large" />
);

SurveyButton.protoTypes = {
  label: string.isRequired,
  buttonType: string
};

export default SurveyButton;
