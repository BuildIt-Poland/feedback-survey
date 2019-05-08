import React from 'react';
import styled from 'styled-components';
import { Grommet, Box, Text } from 'grommet';

import { colorDarkBlue, colorWhite, fontSmall } from '../../styles/designTokens';

const theme = {
  text: {
    medium: {
      size: fontSmall
    }
  }
};

const Wrapper = styled.footer`
  grid-area: footer;
  background: ${colorDarkBlue};
  color: ${colorWhite};
  text-align: center;
  padding: 1rem 2rem;
`;

const Footer = () => (
  <Wrapper>
    <Text size="medium">
      Randstad Sourceright (Hong Kong SAR) EA Licence No. 57155 | Randstad Sourceright (Singapore) EA
    </Text>
  </Wrapper>
);

export default Footer;
