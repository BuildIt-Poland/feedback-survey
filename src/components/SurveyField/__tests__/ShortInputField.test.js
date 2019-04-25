import React from 'react';
import { create } from 'react-test-renderer';

import ShortInputField from '../ShortInputField';

describe('COMPONENT - SurveyField ShortInputField', () => {
  it('does not render without field', () => {
    const component = create(<ShortInputField />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with field', () => {
    const field = {
      id: '123',
      content: 'Question content',
      required: false
    };
    const component = create(<ShortInputField field={field} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
