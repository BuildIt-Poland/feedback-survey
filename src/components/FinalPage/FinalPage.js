import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';

import { colorDarkBlue, colorRed } from '../../styles/variables';

const renderFinalMessage = location => {
  if (location.state.success) {
    return (
      <Heading level="1" textAlign="center">
        Thank you!
      </Heading>
    );
  } else {
    return (
      <Paragraph color={colorRed} textAlign="center">
        Error occured :( {location.state.error}
      </Paragraph>
    );
  }
};

const FinalPage = function({ location }) {
  return (
    <Box align="center" justify="center" pad="medium" background={colorDarkBlue} height="100vh">
      {renderFinalMessage(location)}
    </Box>
  );
};

export default FinalPage;
