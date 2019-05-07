import React from 'react';
import { create } from 'react-test-renderer';

import LabelText from '../LabelText';

describe('COMPONENT - CustomRadioButton LabelText', () => {
  it('renders correctly', () => {
    const component = create(<LabelText />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with icon', () => {
    const component = create(<LabelText withIcon={true} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
