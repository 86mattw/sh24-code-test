import React from 'react';
import { shallow } from 'enzyme';

import OptionGroup from '../src/components/option-group';

describe('the option group component', () => {
  let props;
  let mockHandler;

  beforeEach(() => {
    mockHandler = jest.fn();

    props = {
      options: [
        'one',
        'two',
        'three',
      ],
      onClickHandler: mockHandler,
    };
  });

  afterEach(() => {
    mockHandler.mockClear();
  });

  it('renders a button for each option provided', () => {
    const wrapper = shallow(<OptionGroup {...props} selected="" />);

    expect(wrapper.find('button')).toHaveLength(props.options.length);
  });

  it('add the selected class to the correct button', () => {
    const wrapper = shallow(<OptionGroup {...props} selected="one" />);

    expect(wrapper.find('button').at(0).hasClass('selected')).toBe(true);
    expect(wrapper.find('button').at(1).hasClass('selected')).toBe(false);
  });

  it('calls the handler on button click', () => {
    const wrapper = shallow(<OptionGroup {...props} selected="" />);
    const mockEvent = {
      target: {
        value: 'one',
      },
    };

    wrapper.find('button').at(0).simulate('click', mockEvent);

    expect(mockHandler.mock.calls).toHaveLength(1);
    expect(mockHandler.mock.calls[0][0]).toBe(mockEvent);
  });
});
