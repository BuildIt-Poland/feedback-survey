import styled from 'styled-components';

import { fontXSmall, fontSmall, fontMedium, spacingSmall, spacingMedium } from '../../styles/designTokens';
import media from '../../styles/media';

const Paragraph = styled.p`
  font-size: ${fontSmall};
  margin: ${spacingSmall} auto;

  footer & {
    font-size: ${fontXSmall};
  }

  ${media.tablet`
    font-size: ${fontMedium};
    margin: ${spacingMedium} auto;

    footer & {
      font-size: ${fontSmall};
    };
  `};

  ${media.laptop`
    footer & {
      font-size: ${fontMedium};
    };
  `};
`;

export default Paragraph;
