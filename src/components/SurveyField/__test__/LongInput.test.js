import React from 'react';
import { create } from 'react-test-renderer';

import LongInputField from '../LongInputField';

describe('COMPONENT - SurveyField LongInputField', () => {
  it('renders correctly', () => {
    const field = {
      id: '13',
      content: 'Why?',
      required: false
    };
    const component = create(<LongInputField field={field} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('does not render without field', () => {
    const component = create(<LongInputField />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
