import React from 'react';
import { create } from 'react-test-renderer';

import YesNoField from '../YesNoField';

describe('COMPONENT - SurveyField YesNoField', () => {
  it('renders correctly', () => {
    const field = {
      id: '123',
      content: 'Question content',
      type: 'yesNo',
      required: false,
      options: ['Bad', 'Average']
    };
    const component = create(<YesNoField field={field} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
