import React from 'react';
import { string } from 'prop-types';
import { Box, Heading } from 'grommet';

import { colorRed } from '../../styles/variables';

const ErrorQuestionsMessage = ({ message }) => (
  <Box align="center" justify="center" pad="medium" height="90vh">
    <Heading level="4" textAlign="center" color={colorRed}>
      {message}
    </Heading>
  </Box>
);

ErrorQuestionsMessage.propTypes = {
  message: string.isRequired
};

export default ErrorQuestionsMessage;
