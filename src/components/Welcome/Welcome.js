import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { spacingSmall, colorRed } from '../../styles/designTokens';
import media from '../../styles/media';
import Agreed from '../Agreed';
import LinkButton from '../Button/LinkButton';
import { surveyMatchParams } from '../../types';
import Page from '../Layout/Page';
import StyledHeading from '../Layout/Heading';

const Wrapper = styled(Page)`
  background: none;

  ${media.phone`
    background: url('/image/TextBalloons_illustration.png') no-repeat;
    background-position-x: 2%;
    background-position-y: 99%;
    background-size: 24%;
  `}

  ${media.tablet`
    background-position-x: 3%;
    background-position-y: calc(100% - 3rem);
    background-size: 29%;
  `}

  ${media.desktop`
    background-position-x: 3%;
    background-position-y: 99%;
    background-size: 13%;
  `}

  ${media.large`
    background-position-x: 1%;
    background-position-y: 98%;
    background-size: 13%;
  `}
`;

const Welcome = ({ match = { params: {} } }) => {
  const [surveyId, setSurveyID] = useState('');
  const [clientName, setClientName] = useState('');
  const [path, setPath] = useState('');

  useEffect(() => {
    setSurveyID(match.params.surveyId ? match.params.surveyId : '');
    setClientName(match.params.clientName ? match.params.clientName : '');
    setPath(surveyId && clientName ? `/survey/${surveyId}/${clientName}` : '/survey');
  });

  return (
    <Wrapper>
      <StyledHeading level="1" margin={{ bottom: 'none', top: 'none' }} color={colorRed}>
        Performance Snapshot on RSR Consultant:
      </StyledHeading>
      <StyledHeading level="2" margin={{ top: spacingSmall, bottom: spacingSmall }} color={colorRed}>
        {clientName}
      </StyledHeading>
      <Agreed />
      <LinkButton linkTo={path} label="start" />
    </Wrapper>
  );
};

Welcome.propTypes = {
  match: surveyMatchParams
};

export default Welcome;
