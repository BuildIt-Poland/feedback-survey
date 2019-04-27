import React from 'react';
import { create } from 'react-test-renderer';

import SurveyField from '../SurveyField';

describe('COMPONENT - SurveyField', () => {
  it('renders correctly', () => {
    const field = {
      id: '123',
      content: 'Question content',
      required: false,
      options: ['Bad', 'Average'],
      type: 'kindOfFeedback'
    };
    const answerTypes = [
      {
        type: 'kindOfFeedback',
        values: ['monthly', 'quaterly', 'annual']
      }
    ];
    const component = create(<SurveyField field={field} answerTypes={answerTypes} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
