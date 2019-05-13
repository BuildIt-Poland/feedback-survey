import React from 'react';
import styled from 'styled-components';

import { spacingSmall, spacingMedium } from '../../styles/designTokens';
import media from '../../styles/media';
import Paragraph from '../Layout/Paragraph';

const Wrapper = styled.section`
  margin: ${spacingSmall} auto;

  ${media.tablet`
    margin: ${spacingMedium} auto;
  `};
`;

const Agreed = () => (
  <Wrapper>
    <Paragraph>
      The feedback you provide will be used for individual development and career pathway and forms part of RSR Reward
      and Recognition scheme.
    </Paragraph>
    <Paragraph>
      Feedback will also be used to enhance and evolve individual contribution to your organisation.
    </Paragraph>
    <Paragraph>
      We therefore ask you to provide feedback based on factual evidence only and we may ask you for further information
      in some individual performance feedback.
    </Paragraph>
  </Wrapper>
);

export default Agreed;
