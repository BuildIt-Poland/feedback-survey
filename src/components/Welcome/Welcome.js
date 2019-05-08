import React, { useState, useEffect } from 'react';
import { Box, Heading, Grommet } from 'grommet';

import { spacingSmall, spacingLarge, fontXLarge, fontLarge, colorRed } from '../../styles/designTokens';
import Agreed from '../Agreed';
import LinkButton from '../Button/LinkButton';
import { surveyMatchParams } from '../../types';
import Page from '../Page';

const theme = {
  heading: {
    weight: 400,
    level: {
      1: {
        medium: {
          size: fontXLarge
        }
      },
      2: {
        medium: {
          size: fontLarge
        }
      }
    }
  },
  paragraph: {
    extend: {
      'max-width': 'none'
    }
  },
  box: {
    extend: {
      background: 'url("/image/TextBalloons_illustration.png") no-repeat',
      'background-position-x': '1rem',
      'background-position-y': 'calc(100% - 3rem)',
      'background-size': '25rem'
    }
  }
};

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
    // <Grommet theme={theme}>
    // <Page align="center" justify="center" pad="medium">
    <Page>
      <Heading level="1" margin={{ bottom: 'none' }} color={colorRed}>
        Performance Snapshot on RSR Consultant:
      </Heading>
      <Heading level="2" margin={{ top: spacingSmall, bottom: spacingLarge }} color={colorRed}>
        {clientName}
      </Heading>
      <Agreed />
      <LinkButton linkTo={path} label="start" />
    </Page>
    // </Box>
    // </Grommet>
  );
};

Welcome.propTypes = {
  match: surveyMatchParams
};

export default Welcome;
