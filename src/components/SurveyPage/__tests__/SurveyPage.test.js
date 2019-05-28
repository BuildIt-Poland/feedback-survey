import React from 'react';
import { create } from 'react-test-renderer';

import SurveyPage from '../SurveyPage';
import { SurveyContext } from '../../../context/SurveyContext';
import { surveyDataMock } from '../../../mocks/surveyDataMock';

const contextValue = {
  isLoading: false,
  error: '',
  data: surveyDataMock.surveyData
};

describe('COMPONENT - SurveyPage', () => {
  it('renders correctly with params', () => {
    const match = {
      params: {
        surveyId: '12345',
        employeeName: 'John'
      }
    };
    const component = create(
      <SurveyContext.Provider value={contextValue}>
        <SurveyPage match={match} />
      </SurveyContext.Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('renders Loading component if data loading', () => {
    const props = {
      ...contextValue,
      isLoading: true
    };
    const component = create(
      <SurveyContext.Provider value={props}>
        <SurveyPage />
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
        <SurveyPage />
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
        <SurveyPage />
      </SurveyContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with data', () => {
    const component = create(
      <SurveyContext.Provider value={contextValue}>
        <SurveyPage />
      </SurveyContext.Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
