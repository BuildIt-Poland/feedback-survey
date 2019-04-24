import React from 'react';
import { create } from 'react-test-renderer';

import SurveyField from '../SurveyField';

describe('COMPONENT - SurveyField', () => {
  it('renders correctly', () => {
    const component = create(<SurveyField />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
