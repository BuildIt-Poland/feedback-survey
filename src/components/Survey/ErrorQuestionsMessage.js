import React from 'react';
import { string } from 'prop-types';
import { Box, Heading } from 'grommet';

import { colorRed } from '../../styles/designTokens';
import { DEFAULT_ERROR } from '../../constatnts/messages';

const ErrorQuestionsMessage = ({ message = DEFAULT_ERROR }) => (
  <Box align="center" justify="center" pad="medium" height="90vh">
    <Heading level="4" textAlign="center" color={colorRed}>
      {message}
    </Heading>
  </Box>
);

ErrorQuestionsMessage.propTypes = {
  message: string
};

export default ErrorQuestionsMessage;
