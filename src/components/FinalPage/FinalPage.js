import React from 'react';
import { Box, Heading, Paragraph, Grommet } from 'grommet';

import { colorRed } from '../../styles/designTokens';
import { THANK_YOU, ERROR_OCCURED } from '../../constatnts/messages';
import { finalLocationState } from '../../types';
import Page from '../Page';

const theme = {
  heading: {
    weight: '400'
  },
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
  // <Grommet theme={theme}>
  // <Box align="center" justify="center" pad="medium" height="90vh">
  <Page>{renderFinalMessage(location.state.isSuccessSave, location.state.saveErrorMessage)}</Page>
  // </Box>
  // </Grommet>
);

FinalPage.propTypes = {
  location: finalLocationState
};

export default FinalPage;
