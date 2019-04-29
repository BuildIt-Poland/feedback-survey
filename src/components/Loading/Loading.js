import React from 'react';
import { Box, Heading } from 'grommet';

const Loading = () => (
  <Box animation="pulse" align="center" justify="center" pad="medium" height="90vh">
    <Heading level="4">Loading...</Heading>
  </Box>
);

export default Loading;
