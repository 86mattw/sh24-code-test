import React from 'react';
import { string, func } from 'prop-types';

import textInputStyles from '../sass/text-input.module.scss';

const TextInput = ({ value, label, onChangeHandler }) => {
  const id = label.toLowerCase().replace(' ', '-');

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={textInputStyles.field}
        type="text"
        value={value}
        onChange={onChangeHandler}
      />
    </>
  );
};

TextInput.propTypes = {
  value: string.isRequired,
  label: string.isRequired,
  onChangeHandler: func.isRequired,
};

export default TextInput;
