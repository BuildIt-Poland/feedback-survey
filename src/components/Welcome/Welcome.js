import React from 'react';
import { Box, Heading, Grommet } from 'grommet';

import { spacingSmall, spacingLarge, fontXLarge, fontLarge } from '../../styles/variables';
import Agreed from '../Agreed/Agreed';
import LinkButton from '../Button/LinkButton';

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
  }
};

class Welcome extends React.Component {
  state = { surveyId: '', clientName: '' };
  componentDidMount() {
    const { surveyId, clientName } = this.props.match.params;
    this.setState({
      surveyId,
      clientName
    });
  }
  render() {
    const { surveyId, clientName } = this.state;
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
          <LinkButton linkTo={`/survey/${surveyId}/${clientName}`} label="start" />
        </Box>
      </Grommet>
    );
  }
}

export default Welcome;
