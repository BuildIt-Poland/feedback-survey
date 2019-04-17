import React from 'react';
import { Grommet, Box } from 'grommet';

const theme = {
  box: {
    extend: {
      img: {
        width: '20rem',
        margin: '3rem 0 3rem 1.5rem'
      }
    }
  }
};

function Header({ bgColor, logoColor }) {
  return (
    <Grommet theme={theme}>
      <Box background={bgColor}>
        <img src={'./image/logo-' + logoColor + '.svg'} alt="randstad logo" />
      </Box>
    </Grommet>
  );
}

export default Header;
