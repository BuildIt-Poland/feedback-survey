import React from 'react';
import { Box, Button, Heading } from 'grommet';

import { colorDarkBlue, colorRed, colorWhite } from '../../styles/variables';

const Welcome = function() {
  return (
    <Box align="center" justify="center" pad="medium" background={colorDarkBlue} height="100vh">
      <Heading level="1" textAlign="center">
        Performance Snapshot on RSR Consultant:
      </Heading>
      <Heading level="2" color={colorRed}>
        John Doe
      </Heading>
      <Button label="start" color={colorWhite} margin="xlarge" />
    </Box>
  );
};

export default Welcome;
