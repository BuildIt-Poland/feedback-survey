import React from 'react';
import { create } from 'react-test-renderer';

import SelectField from '../SelectField';

describe('COMPONENT - SurveyField SelectField', () => {
  it('does not render without field', () => {
    const field = {
      id: '123',
      type: 'select',
      content: 'Question content',
      required: false,
      options: ['One', 'Two']
    };
    const component = create(<SelectField field={field} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
