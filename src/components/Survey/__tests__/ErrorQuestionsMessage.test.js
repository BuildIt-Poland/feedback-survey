import React from 'react';
import { create } from 'react-test-renderer';

import ErrorQuestionsMessage from '../ErrorQuestionsMessage';

describe('COMPONENT - ErrorQuestionsMessage', () => {
  it('renders correctly', () => {
    const message = 'Test error message';
    const component = create(<ErrorQuestionsMessage message={message} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
