import React from 'react';
import { string, func, bool } from 'prop-types';

import radioInputStyles from '../sass/radio-input.module.scss';

const RadioInput = ({
  value,
  name,
  onChangeHandler,
  isChecked,
}) => {
  const id = value.toLowerCase().replace(' ', '-');

  // As inputs are hidden, handle key presses on the
  // label to update the state. This maintains keyboard
  // navigation for the site.
  const onKeyPressHandler = (e, v) => {
    const key = e.which || e.keyCode;
    if (key === 32 || key === 13) {
      onChangeHandler({
        target: {
          value: v,
        },
      });
    }
  };

  return (
    <>
      <input
        className={radioInputStyles.field}
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChangeHandler}
      />
      <label
        className={radioInputStyles.label}
        htmlFor={id}
        tabIndex="0"
        onKeyPress={(e) => onKeyPressHandler(e, value)}
      >
        {value}
      </label>
    </>
  );
};

RadioInput.propTypes = {
  value: string.isRequired,
  name: string.isRequired,
  onChangeHandler: func.isRequired,
  isChecked: bool.isRequired,
};

export default RadioInput;
