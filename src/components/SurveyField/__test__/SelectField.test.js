import React from 'react';
import { create } from 'react-test-renderer';

import SelectField from '../SelectField';

describe('COMPONENT - SurveyField SelectField', () => {
  it('renders correctly', () => {
    const component = create(<SelectField />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
