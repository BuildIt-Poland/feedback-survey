import React from 'react';
import styled from 'styled-components';

import { colorRed } from '../../styles/designTokens';
import { THANK_YOU, ERROR_OCCURED } from '../../constatnts/messages';
import { finalLocationState } from '../../types';
import Page from '../Layout/Page';
import StyledHeading from '../Layout/Heading';
import Paragraph from '../Layout/Paragraph';
import media from '../../styles/media';
import Main from '../App/Main';

const Wrapper = styled(Page)`
  &:after {
    content: '';
    background: url('/image/BinarycodeWithHearts.png') no-repeat;
    background-size: cover;
    opacity: 0.85;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }

  ${media.tablet`
    &:after {
      opacity: 1;
    };
  `}
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
  <Main>
    <Wrapper>{renderFinalMessage(location.state.isSuccessSave, location.state.saveErrorMessage)}</Wrapper>
  </Main>
);

FinalPage.propTypes = {
  location: finalLocationState
};

export default FinalPage;
