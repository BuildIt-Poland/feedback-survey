import React from 'react';
import { create } from 'react-test-renderer';

import RatingIcon from '../RatingIcon';

describe('COMPONENT - RatingIcon', () => {
  it('does not render if not matching icon', () => {
    const component = create(<RatingIcon iconType="test" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with bad icon', () => {
    const component = create(<RatingIcon iconType="bad" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with average icon', () => {
    const component = create(<RatingIcon iconType="average" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with good icon', () => {
    const component = create(<RatingIcon iconType="good" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with excellent icon', () => {
    const component = create(<RatingIcon iconType="excellent" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
