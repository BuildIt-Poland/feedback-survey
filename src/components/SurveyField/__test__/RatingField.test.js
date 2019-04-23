import React from 'react';
import { create } from 'react-test-renderer';

import RatingField from '../RatingField';

describe('COMPONENT - SurveyField RatingField', () => {
  it('renders correctly', () => {
    const component = create(<RatingField />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
