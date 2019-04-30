import React from 'react';
import { create } from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-testing-library';

import Survey from '../Survey';
import { SurveyContext } from '../../../context/SurveyContext';

const contextValue = {
  isLoading: false,
  error: '',
  data: {
    questions: [
      {
        id: '4',
        type: 'select',
        content: 'What kind of feedback are you providing?',
        required: false,
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
  }
};

afterEach(cleanup);

describe('COMPONENT - Survey', () => {
  it('renders Loading component if data loading', () => {
    const props = {
      ...contextValue,
      isLoading: true
    };
    const component = create(
      <SurveyContext.Provider value={props}>
        <Survey />
      </SurveyContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders error message', () => {
    const props = {
      ...contextValue,
      error: 'error message'
    };
    const component = create(
      <SurveyContext.Provider value={props}>
        <Survey />
      </SurveyContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders info message if there are no questions ', () => {
    const props = {
      ...contextValue,
      data: {
        questions: [],
        answerTypes: []
      }
    };
    const component = create(
      <SurveyContext.Provider value={props}>
        <Survey />
      </SurveyContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with data', () => {
    const component = create(
      <SurveyContext.Provider value={contextValue}>
        <Survey />
      </SurveyContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('submits form if button clicked', () => {
    const { getByText } = render(
      <SurveyContext.Provider value={contextValue}>
        <Survey />
      </SurveyContext.Provider>
    );

    fireEvent.click(getByText('submit'));

    expect(getByText('Saving survey...')).toBeDefined();
  });
});
