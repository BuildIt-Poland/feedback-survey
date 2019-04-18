import React from 'react';
import { Box, Heading, Paragraph, Grommet } from 'grommet';

import { colorRed } from '../../styles/variables';

const theme = {
  box: {
    extend: {
      background: 'url("/image/BinarycodeWithHearts.png") no-repeat',
      'background-size': '80%'
    }
  }
};

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
    <Grommet theme={theme}>
      <Box align="center" justify="center" pad="medium" height="90vh">
        {renderFinalMessage(location)}
      </Box>
    </Grommet>
  );
};

export default FinalPage;
