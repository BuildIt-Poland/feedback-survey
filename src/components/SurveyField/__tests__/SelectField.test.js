import React from 'react';
import { create } from 'react-test-renderer';

import SelectField from '../SelectField';

describe('COMPONENT - SurveyField SelectField', () => {
  it('does not render without field', () => {
    const component = create(<SelectField />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with field', () => {
    const field = {
      id: '123',
      content: 'Question content',
      required: false,
      options: ['One', 'Two']
    };
    const component = create(<SelectField field={field} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
