import { createGlobalStyle } from 'styled-components';

import { fontWeightNormal, fontWeightBold, fontMedium, colorWhite, colorDarkBlue } from '../../styles/designTokens';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Tahoma, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: scroll;
    font-weight: ${fontWeightNormal};
    font-size: ${fontMedium};
    line-height: 1.4;
    background-color: ${colorWhite};
    color: ${colorDarkBlue};
  }

  html, body {
    width: 100%;
    height: 100%;
}

  strong {
    font-weight: ${fontWeightBold};
  }

  em {
    font-style: italic;
    font-weight: ${fontWeightNormal};
  }
`;

export default GlobalStyle;
