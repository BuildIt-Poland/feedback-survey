import React from 'react';
import { string, bool } from 'prop-types';
import { Box, Heading, Paragraph, Grommet } from 'grommet';

import { colorRed } from '../../styles/variables';
import { THANK_YOU, ERROR_OCCURED } from '../../constatnts/messages';

const theme = {
  box: {
    extend: {
      background: 'url("/image/BinarycodeWithHearts.png") no-repeat',
      'background-size': '80%'
    }
  }
};

const renderFinalMessage = (success, errorMessage) => {
  if (success) {
    return (
      <Heading level="1" textAlign="center">
        {THANK_YOU}
      </Heading>
    );
  }
  return (
    <Paragraph color={colorRed} textAlign="center">
      {`${ERROR_OCCURED}: ${errorMessage}`}
    </Paragraph>
  );
};

const FinalPage = ({ success, errorMessage }) => (
  <Grommet theme={theme}>
    <Box align="center" justify="center" pad="medium" height="90vh">
      {renderFinalMessage(success, errorMessage)}
    </Box>
  </Grommet>
);

FinalPage.propTypes = {
  success: bool,
  error: string
};

export default FinalPage;
