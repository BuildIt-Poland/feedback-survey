import React from 'react';
import { create } from 'react-test-renderer';

import ShortInputField from '../ShortInputField';

describe('COMPONENT - SurveyField ShortInputField', () => {
  it('renders correctly', () => {
    const field = {
      id: '123',
      type: '',
      content: 'Question content',
      required: false
    };
    const component = create(<ShortInputField field={field} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
