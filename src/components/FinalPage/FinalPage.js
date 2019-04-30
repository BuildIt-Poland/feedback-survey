import React from 'react';
import { Box, Heading, Paragraph, Grommet } from 'grommet';

import { colorRed } from '../../styles/designTokens';
import { THANK_YOU, ERROR_OCCURED } from '../../constatnts/messages';
import { finalLocationState } from '../../types';

const theme = {
  box: {
    extend: {
      background: 'url("/image/BinarycodeWithHearts.png") no-repeat',
      'background-size': '80%'
    }
  }
};

const renderFinalMessage = (isSuccessSave, saveErrorMessage) => {
  if (isSuccessSave) {
    return (
      <Heading level="1" textAlign="center">
        {THANK_YOU}
      </Heading>
    );
  }
  return (
    <Paragraph color={colorRed} textAlign="center">
      {`${ERROR_OCCURED}: ${saveErrorMessage}`}
    </Paragraph>
  );
};

const FinalPage = ({ location }) => (
  <Grommet theme={theme}>
    <Box align="center" justify="center" pad="medium" height="90vh">
      {renderFinalMessage(location.state.isSuccessSave, location.state.saveErrorMessage)}
    </Box>
  </Grommet>
);

FinalPage.propTypes = {
  location: finalLocationState
};

export default FinalPage;
