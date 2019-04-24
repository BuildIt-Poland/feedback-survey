import React from 'react';
import { create } from 'react-test-renderer';

import ShortInputField from '../ShortInputField';

describe('COMPONENT - SurveyField ShortInputField', () => {
  it('renders correctly', () => {
    const component = create(<ShortInputField />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
