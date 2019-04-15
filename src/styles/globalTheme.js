import { colorWhite, spacingSmall, spacingLarge } from './variables';
import { inputTheme } from '../components/SurveyField/ShortInputField';

const theme = {
  button: {
    color: colorWhite,
    border: {
      radius: '0'
    },
    padding: {
      horizontal: spacingLarge,
      vertical: spacingSmall
    }
  },
  ...inputTheme
};

export default theme;
