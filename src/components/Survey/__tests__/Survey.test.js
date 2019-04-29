import React from 'react';
import { create } from 'react-test-renderer';

import Survey from '../Survey';
import { SurveyContext } from '../../../context/SurveyContext';

describe('COMPONENT - Survey', () => {
  it('renders info message if there are no questions ', () => {
    const contextValue = {
      data: {
        questions: [],
        answerTypes: []
      },
      isLoading: false,
      error: null
    };
    const component = create(
      <SurveyContext.Provider value={contextValue}>
        <Survey />
      </SurveyContext.Provider>
    );

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
    const contextValue = {
      data,
      isLoading: false,
      error: null
    };
    const component = create(
      <SurveyContext.Provider value={contextValue}>
        <Survey />
      </SurveyContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
