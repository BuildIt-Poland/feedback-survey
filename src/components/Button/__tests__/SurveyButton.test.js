import React from 'react';
import { create } from 'react-test-renderer';

import SurveyButton from '../SurveyButton';

describe('COMPONENT - SurveyButton', () => {
  it('renders correctly', () => {
    const component = create(<SurveyButton label="test" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
