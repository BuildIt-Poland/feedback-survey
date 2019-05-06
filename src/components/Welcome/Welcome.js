import React, { useState, useEffect } from 'react';
import { Box, Heading, Grommet } from 'grommet';

import { spacingSmall, spacingLarge, fontXLarge, fontLarge } from '../../styles/designTokens';
import Agreed from '../Agreed';
import LinkButton from '../Button/LinkButton';
import { surveyMatchParams } from '../../types';

const theme = {
  heading: {
    weight: 500,
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
      background: 'url("/image/human_in_hand.png") no-repeat',
      'background-position-x': '1rem',
      'background-position-y': 'calc(100% - 3rem)'
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
    <Grommet theme={theme}>
      <Box align="center" justify="center" pad="medium" height="100vh">
        <Heading level="1" margin={{ bottom: 'none' }}>
          Performance Snapshot on RSR Consultant:
        </Heading>
        <Heading level="2" margin={{ top: spacingSmall, bottom: spacingLarge }}>
          {clientName}
        </Heading>
        <Agreed />
        <LinkButton linkTo={path} label="start" />
      </Box>
    </Grommet>
  );
};

Welcome.propTypes = {
  match: surveyMatchParams
};

export default Welcome;
