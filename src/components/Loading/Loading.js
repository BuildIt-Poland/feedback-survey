import React from 'react';
import { Box } from 'grommet';
import StyledHeading from '../Layout/Heading';

const Loading = () => (
  <Box animation="pulse" align="center" justify="center" pad="medium" height="90vh">
    <StyledHeading level="3">Loading...</StyledHeading>
  </Box>
);

export default Loading;
