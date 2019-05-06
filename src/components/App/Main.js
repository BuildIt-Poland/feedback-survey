import React from 'react';
import { element } from 'prop-types';
import { Grid, Box } from 'grommet';

import Header from '../Header';
import Footer from '../Footer';

const Main = ({ children }) => (
  <Grid
    rows={['auto', '1fr', 'auto']}
    columns={['100%']}
    areas={[
      { name: 'header', start: [0, 0], end: [0, 0] },
      { name: 'main', start: [0, 1], end: [0, 1] },
      { name: 'footer', start: [0, 2], end: [0, 2] }
    ]}
  >
    <Box gridArea="header">
      <Header />
    </Box>
    <Box gridArea="main">{children}</Box>
    <Box gridArea="footer">
      <Footer />
    </Box>
  </Grid>
);

Main.protoTypes = {
  children: element.isRequired
};

export default Main;
