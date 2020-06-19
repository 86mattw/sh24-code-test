import React from 'react';
import { string, func } from 'prop-types';

const TextInput = ({ value, onChangeHandler }) => (
  <input
    type="text"
    value={value}
    onChange={onChangeHandler}
  />
);

TextInput.propTypes = {
  value: string.isRequired,
  onChangeHandler: func.isRequired,
};

export default TextInput;
