import React from 'react';
import { create } from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-testing-library';

import SurveyForm from '../SurveyForm';
import { surveyDataMock } from '../../../mocks/surveyDataMock';

jest.mock('react-router-dom', () => ({
  Redirect: 'Redirect'
}));

afterEach(cleanup);

describe('COMPONENT - SurveyForm', () => {
  it('renders correctly', () => {
    const component = create(<SurveyForm {...surveyDataMock} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with errors', () => {
    const updatedProps = {
      ...surveyDataMock,
      errors: {
        testName: 'error'
      }
    };
    const component = create(<SurveyForm {...updatedProps} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('calls handleSubmit when submit form', () => {
    const updatedProps = {
      ...surveyDataMock,
      handleSubmit: jest.fn()
    };
    const { getByText } = render(<SurveyForm {...updatedProps} />);

    fireEvent.click(getByText('submit'));

    expect(updatedProps.handleSubmit).toHaveBeenCalled();
  });

  it('shows saving survey placeholder when submit', () => {
    const updatedProps = {
      ...surveyDataMock,
      isSubmitting: true
    };
    const { getByText } = render(<SurveyForm {...updatedProps} />);

    expect(getByText('Saving survey...')).toBeDefined();
  });

  it('redirects after submit form', () => {
    const updatedProps = {
      ...surveyDataMock,
      status: {
        isSubmitted: true
      }
    };
    const component = create(<SurveyForm {...updatedProps} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
