import React from 'react';
import { create } from 'react-test-renderer';

import Survey from '../Survey';

describe('COMPONENT - Survey', () => {
  it('renders info message if there are no questions ', () => {
    const data = {
      questions: [],
      answerTypes: []
    };
    const component = create(<Survey data={data} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const data = {
      questions: [
        {
          id: '4',
          type: 'select',
          content: 'What kind of feedback are you providing?',
          required: true,
          name: 'kind-of-feedback',
          answerType: 'kindOfFeedback'
        }
      ],
      answerTypes: [
        {
          type: 'kindOfFeedback',
          values: ['monthly', 'quaterly', 'annual']
        }
      ]
    };
    const component = create(<Survey data={data} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
