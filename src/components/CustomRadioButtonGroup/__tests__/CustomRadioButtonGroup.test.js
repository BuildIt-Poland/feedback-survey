import React from 'react';
import { create } from 'react-test-renderer';

import CustomRadioButtonGroup from '..';

describe('COMPONENT - CustomRadioButtonGroup', () => {
  it('renders correctly', () => {
    const props = {
      options: [
        {
          id: 'test1',
          value: 'test',
          label: 'label-test'
        },
        {
          id: 'test2',
          value: 'test',
          label: 'label-test'
        }
      ],
      name: 'test'
    };
    const component = create(<CustomRadioButtonGroup {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders correctly with icon', () => {
    const props = {
      options: [
        {
          id: 'test1',
          value: 'test',
          label: 'label-test'
        },
        {
          id: 'test2',
          value: 'test',
          label: 'label-test'
        }
      ],
      name: 'test',
      withIcon: true
    };
    const component = create(<CustomRadioButtonGroup {...props} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
