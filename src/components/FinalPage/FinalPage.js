import React from 'react';
import styled from 'styled-components';

import { colorRed } from '../../styles/designTokens';
import { THANK_YOU, ERROR_OCCURED } from '../../constatnts/messages';
import { finalLocationState } from '../../types';
import Page from '../Layout/Page';
import StyledHeading from '../Layout/Heading';
import Paragraph from '../Layout/Paragraph';

const Wrapper = styled(Page)`
  background: url('/image/BinarycodeWithHearts.png') no-repeat;
  background-size: 80%;
`;

const renderFinalMessage = (isSuccessSave, saveErrorMessage) => {
  if (isSuccessSave) {
    return (
      <StyledHeading level="1" textAlign="center">
        {THANK_YOU}
      </StyledHeading>
    );
  }
  return (
    <Paragraph color={colorRed} textAlign="center">
      {`${ERROR_OCCURED}: ${saveErrorMessage}`}
    </Paragraph>
  );
};

const FinalPage = ({ location }) => (
  <Wrapper>{renderFinalMessage(location.state.isSuccessSave, location.state.saveErrorMessage)}</Wrapper>
);

FinalPage.propTypes = {
  location: finalLocationState
};

export default FinalPage;
