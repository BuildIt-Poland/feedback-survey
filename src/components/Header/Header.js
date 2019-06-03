import React from 'react';
import styled from 'styled-components';

import { Link as LinkBase } from 'react-router-dom';

import media from '../../styles/media';
import { colorDarkBlue } from '../../styles/designTokens';
import LogoIcon from '../Icons/LogoIcon';

const Link = styled(LinkBase)`
  height: 100%;
  cursor: pointer;
  padding: 0;
  position: relative;

  svg {
    max-width: 40rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colorDarkBlue};
  height: 8.5rem;
  padding: 0%;

  header {
    max-width: 107rem;
    width: 100%;
  }

  ${media.mobileS`
    padding: 0 1rem;
  `};
`;

const Header = () => (
  <Wrapper>
    <header>
      <Link to="/">
        <LogoIcon />
      </Link>
    </header>
  </Wrapper>
);

export default Header;
