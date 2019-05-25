import React from 'react';
import { create } from 'react-test-renderer';

import SurveyFormWithFormik from '../SurveyFormWithFormik';
import { surveyDataMock } from '../../../mocks/surveyDataMock';

describe('COMPONENT - SurveyFormWithFormik', () => {
  it('renders correctly', () => {
    const component = create(<SurveyFormWithFormik {...surveyDataMock} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
