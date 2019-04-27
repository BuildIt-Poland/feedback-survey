import React from 'react';
import { create } from 'react-test-renderer';

import RatingField from '../RatingField';

describe('COMPONENT - SurveyField RatingField', () => {
  it('does not render without field', () => {
    const field = {
      id: '123',
      type: 'rating',
      content: 'Question content',
      required: false,
      options: ['Bad', 'Average']
    };
    const component = create(<RatingField field={field} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
