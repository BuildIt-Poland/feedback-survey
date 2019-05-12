import React from 'react';
import { create } from 'react-test-renderer';

import StyledFormField from '../StyledFormField';

describe('COMPONENT - SurveyField StyledFormField', () => {
  it('renders correctly', () => {
    const component = create(<StyledFormField />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
