import React, { useState, useEffect } from 'react';

import { spacingSmall, colorRed } from '../../styles/designTokens';
import Agreed from '../Agreed';
import LinkButton from '../Button/LinkButton';
import { surveyMatchParams } from '../../types';
import Page from '../Layout/Page';
import StyledHeading from '../Layout/Heading';
import Main from '../App/Main';

const WelcomePage = ({ match = { params: {} } }) => {
  const [surveyId, setSurveyID] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [path, setPath] = useState('');

  useEffect(() => {
    setSurveyID(match.params.surveyId ? match.params.surveyId : '');
    setEmployeeName(match.params.employeeName ? match.params.employeeName : '');
    setPath(surveyId && employeeName ? `/survey/${surveyId}/${employeeName}` : '/survey');
  });

  return (
    <Main bgImage="/image/TextBalloons_illustration.png">
      <Page>
        <StyledHeading level="1" margin={{ bottom: 'none', top: 'none' }} color={colorRed}>
          Performance Snapshot on RSR Consultant:
        </StyledHeading>
        <StyledHeading level="2" margin={{ top: spacingSmall, bottom: spacingSmall }} color={colorRed}>
          {employeeName}
        </StyledHeading>
        <Agreed />
        <LinkButton linkTo={path} label="start" />
      </Page>
    </Main>
  );
};

WelcomePage.propTypes = {
  match: surveyMatchParams
};

export default WelcomePage;
