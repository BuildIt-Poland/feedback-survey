import React from 'react';
import styled from 'styled-components';

import { colorDarkBlue, colorWhite } from '../../styles/designTokens';
import Paragraph from '../Layout/Paragraph';

const Wrapper = styled.footer`
  grid-area: footer;
  background: ${colorDarkBlue};
  color: ${colorWhite};
  text-align: center;
  padding: 1rem 2rem;
`;

const Footer = () => (
  <Wrapper>
    <Paragraph>
      Randstad Sourceright (Hong Kong SAR) EA Licence No. 57155 | Randstad Sourceright (Singapore) EA
    </Paragraph>
  </Wrapper>
);

export default Footer;
