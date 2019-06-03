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

const currentYear = () => new Date().getFullYear();

const Footer = () => (
  <Wrapper>
    <Paragraph>&copy; Randstad Sourceright {currentYear()}</Paragraph>
  </Wrapper>
);

export default Footer;
