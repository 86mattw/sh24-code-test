import React from 'react';
import { string, func, bool } from 'prop-types';

const RadioInput = ({
  value,
  name,
  onChangeHandler,
  isChecked,
}) => {
  const id = value.toLowerCase().replace(' ', '-');

  return (
    <>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChangeHandler}
      />
      <label htmlFor={id}>{value}</label>
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
