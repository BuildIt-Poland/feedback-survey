import React from 'react';
import { create } from 'react-test-renderer';

import YesNoField from '../YesNoField';

describe('COMPONENT - SurveyField YesNoField', () => {
  it('renders correctly', () => {
    const props = {
      field: {
        id: '123',
        content: 'Question content',
        type: 'yesNo',
        required: false
      },
      options: [
        {
          id: 'test123',
          value: 'test',
          label: 'label-test'
        }
      ]
    };
    const component = create(<YesNoField {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
