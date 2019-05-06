import React from 'react';
import { create } from 'react-test-renderer';

import RatingField from '../RatingField';

describe('COMPONENT - SurveyField RatingField', () => {
  it('does not render without field', () => {
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
    const component = create(<RatingField {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
