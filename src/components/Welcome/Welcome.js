import React from 'react';
import { Box, Heading, Grommet } from 'grommet';

import { spacingSmall, spacingLarge, fontXLarge, fontLarge } from '../../styles/variables';
import Agreed from '../Agreed/Agreed';
import LinkButton from '../Button/LinkButton';

const theme = {
  heading: {
    weight: 500,
    level: {
      1: {
        medium: {
          size: fontXLarge
        }
      },
      2: {
        medium: {
          size: fontLarge
        }
      }
    }
  },
  paragraph: {
    extend: {
      'max-width': 'none'
    }
  }
};

const Welcome = function() {
  return (
    <Grommet theme={theme}>
      <Box align="center" justify="center" pad="medium" height="100vh">
        <Heading level="1" margin={{ bottom: 'none' }}>
          Performance Snapshot on RSR Consultant:
        </Heading>
        <Heading level="2" margin={{ top: spacingSmall, bottom: spacingLarge }}>
          John Doe
        </Heading>
        <Agreed />
        <LinkButton linkTo="/survey" label="start" />
      </Box>
    </Grommet>
  );
};

export default Welcome;
