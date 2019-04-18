import React from 'react';
import { Grid, Box } from 'grommet';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main = function({ children }) {
  return (
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
};

export default Main;
