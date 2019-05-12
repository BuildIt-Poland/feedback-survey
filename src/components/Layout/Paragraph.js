import styled from 'styled-components';

import { fontSmall, fontMedium, fontLarge, spacingSmall, spacingMedium } from '../../styles/designTokens';
import media from '../../styles/media';

const Paragraph = styled.p`
  font-size: ${fontSmall};
  margin: ${spacingSmall} auto;

  ${media.tablet`
    font-size: ${fontMedium}
    margin: ${spacingMedium} auto;
  `};

  ${media.large`
    font-size: ${fontLarge}
  `};
`;

export default Paragraph;
