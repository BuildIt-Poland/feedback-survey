import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Paragraph, Button } from 'grommet';

import { colorYellow, colorWhite } from '../../styles/variables';

const Agreed = function() {
  return (
    <Box align="center" justify="center" pad="medium" background={colorYellow} height="100vh">
      <Paragraph>
        The feedback you provide will be used for individual development and career pathway and forms part of RSR Reward
        and Recognition scheme.
      </Paragraph>
      <Paragraph color={colorWhite}>
        Feedback will also be used to enhance and evolve individual contribution to your organisation.
      </Paragraph>
      <Paragraph>
        We therefore ask you to provide feedback based on factual evidence only and we may ask you for further
        information in some individual performance feedback.
      </Paragraph>
      <Link to="/survey">
        <Button label="ok" color={colorWhite} margin="xlarge" />
      </Link>
    </Box>
  );
};

export default Agreed;
