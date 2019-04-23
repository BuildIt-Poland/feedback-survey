import React from 'react';
import { create } from 'react-test-renderer';

import YesNoField from '../YesNoField';

describe('COMPONENT - SurveyField YesNoField', () => {
  it('renders correctly', () => {
    const component = create(<YesNoField />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
