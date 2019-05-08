import React from 'react';
import styled from 'styled-components';
import { element } from 'prop-types';
import { Grid, Box } from 'grommet';

import Header from '../Header';
import Footer from '../Footer';

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;

  div {
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }
`;

// const Main = ({ children }) => (
//   <Grid
//     rows={['auto', '1fr', 'auto']}
//     columns={['100%']}
//     areas={[
//       { name: 'header', start: [0, 0], end: [0, 0] },
//       { name: 'main', start: [0, 1], end: [0, 1] },
//       { name: 'footer', start: [0, 2], end: [0, 2] }
//     ]}
//   >
//     <Box gridArea="header">
//       <Header />
//     </Box>
//     <Box gridArea="main">{children}</Box>
//     <Box gridArea="footer">
//       <Footer />
//     </Box>
//   </Grid>
// );

// Main.protoTypes = {
//   children: element.isRequired
// };

export default Main;
