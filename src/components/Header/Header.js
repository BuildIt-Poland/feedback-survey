import React from 'react';
import { Link } from 'react-router-dom';
import { Grommet, Box } from 'grommet';

import { colorDarkBlue } from '../../styles/designTokens';

const theme = {
  box: {
    extend: {
      img: {
        width: '40rem',
        height: '5rem',
        margin: '1.5rem 3rem'
      }
    }
  }
};

const Header = () => (
  <Grommet theme={theme}>
    <Box background={colorDarkBlue}>
      <Link to="/">
        <img src={'/image/rsr_logo.svg'} alt="randstad sourceright logo" />
      </Link>
    </Box>
  </Grommet>
);

export default Header;
