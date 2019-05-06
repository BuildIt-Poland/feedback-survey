import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 8000;
  overflow: hidden;
`;

const Overlay = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Overlay;
