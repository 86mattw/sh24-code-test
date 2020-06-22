import React from 'react';
import { shallow } from 'enzyme';

import TextInput from '../src/components/text-input';

describe('the text input component', () => {
  let props;
  let mockHandler;

  beforeEach(() => {
    mockHandler = jest.fn();

    props = {
      value: 'foo',
      label: 'test',
      onChangeHandler: mockHandler,
    };
  });

  afterEach(() => {
    mockHandler.mockClear();
  });

  it('renders the correct label for the input', () => {
    const wrapper = shallow(<TextInput {...props} />);
    const label = wrapper.find('label');

    expect(label).toHaveLength(1);
    expect(label.text()).toEqual(props.label);
  });

  it('renders the input with the correct value', () => {
    const wrapper = shallow(<TextInput {...props} />);
    const input = wrapper.find('input');

    expect(input).toHaveLength(1);
    expect(input.props().value).toEqual(props.value);
  });

  it('calls the on change handler when the input is updated', () => {
    const wrapper = shallow(<TextInput {...props} />);
    const mockEvent = {
      target: {
        value: 'foobar',
      },
    };

    wrapper.find('input').at(0).simulate('change', mockEvent);

    expect(mockHandler.mock.calls).toHaveLength(1);
    expect(mockHandler.mock.calls[0][0]).toEqual(mockEvent);
  });
});
