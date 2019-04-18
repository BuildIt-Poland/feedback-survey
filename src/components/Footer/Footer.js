import React from 'react';
import { Grommet, Box, Text } from 'grommet';
import { colorDarkBlue, fontSmall } from '../../styles/variables';

const theme = {
  text: {
    medium: {
      size: fontSmall
    }
  }
};

function Footer() {
  return (
    <Grommet theme={theme}>
      <Box background={colorDarkBlue} align="center" pad="medium">
        <Text size="medium">
          Randstad Sourceright (Hong Kong SAR) EA Licence No. 57155 | Randstad Sourceright (Singapore) EA
        </Text>
      </Box>
    </Grommet>
  );
}

export default Footer;
