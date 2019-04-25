import React from 'react';
import { create } from 'react-test-renderer';

import YesNoField from '../YesNoField';

describe('COMPONENT - SurveyField YesNoField', () => {
  it('renders correctly', () => {
    const component = create(<YesNoField />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with field', () => {
    const field = {
      id: '123',
      content: 'Question content',
      required: false,
      options: ['Bad', 'Average']
    };
    const component = create(<YesNoField field={field} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
