import React from 'react';
import { create } from 'react-test-renderer';

import ErrorQuestionsMessage from '../ErrorQuestionsMessage';

describe('COMPONENT - ErrorQuestionsMessage', () => {
  it('renders correctly', () => {
    const component = create(<ErrorQuestionsMessage />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
