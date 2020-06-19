import React from 'react';
import { string, func } from 'prop-types';

import textInputStyles from '../sass/text-input.module.scss';

const TextInput = ({ value, label, onChangeHandler }) => (
  <>
    <label>
      {label}
      <input
        className={textInputStyles.field}
        type="text"
        value={value}
        onChange={onChangeHandler}
      />
    </label>
  </>
);

TextInput.propTypes = {
  value: string.isRequired,
  label: string.isRequired,
  onChangeHandler: func.isRequired,
};

export default TextInput;
