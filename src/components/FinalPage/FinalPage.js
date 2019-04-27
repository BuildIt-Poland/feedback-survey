import React from 'react';
import PropTypes, { object } from 'prop-types';
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
  if (location && location.state.success) {
    return (
      <Heading level="1" textAlign="center">
        Thank you!
      </Heading>
    );
  }
  return (
    <Paragraph color={colorRed} textAlign="center">
      Error occured :( {location.state.error}
    </Paragraph>
  );
};

const FinalPage = ({ location }) => {
  return (
    <Grommet theme={theme}>
      <Box align="center" justify="center" pad="medium" height="90vh">
        {renderFinalMessage(location)}
      </Box>
    </Grommet>
  );
};

FinalPage.propTypes = {
  location: PropTypes.shape({ state: object.isRequired })
};

export default FinalPage;
