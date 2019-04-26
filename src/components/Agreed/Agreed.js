import React from 'react';
import styled from 'styled-components';
import { Paragraph } from 'grommet';

import { spacingLarge } from '../../styles/variables';

const Wrapper = styled.section`
  margin: ${spacingLarge} auto;
`;

const Agreed = () => {
  return (
    <Wrapper>
      <Paragraph size="large">
        The feedback you provide will be used for individual development and career pathway and forms part of RSR Reward
        and Recognition scheme.
      </Paragraph>
      <Paragraph size="large">
        Feedback will also be used to enhance and evolve individual contribution to your organisation.
      </Paragraph>
      <Paragraph size="large">
        We therefore ask you to provide feedback based on factual evidence only and we may ask you for further
        information in some individual performance feedback.
      </Paragraph>
    </Wrapper>
  );
};

export default Agreed;
