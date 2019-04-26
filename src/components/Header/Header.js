import React from 'react';
import { Grommet, Box } from 'grommet';
import { colorDarkBlue } from '../../styles/variables';

const theme = {
  box: {
    extend: {
      img: {
        width: '24rem',
        margin: '1.5rem 3rem'
      }
    }
  }
};

const Header = () => {
  return (
    <Grommet theme={theme}>
      <Box background={colorDarkBlue}>
        <img src={'/image/logo.svg'} alt="randstad logo" />
      </Box>
    </Grommet>
  );
};

export default Header;
