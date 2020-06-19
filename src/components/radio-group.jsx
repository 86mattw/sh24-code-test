import React from 'react';
import { arrayOf, func, string } from 'prop-types';

import RadioInput from './radio-input';

const RadioGroup = ({
  options,
  name,
  selected,
  onChangeHandler,
}) => (
  <>
    {options.map((option) => {
      const isChecked = option === selected;
      return (
        <RadioInput
          value={option}
          onChangeHandler={onChangeHandler}
          name={name}
          isChecked={isChecked}
        />
      );
    })}
  </>
);

RadioGroup.propTypes = {
  options: arrayOf(string).isRequired,
  name: string.isRequired,
  selected: string.isRequired,
  onChangeHandler: func.isRequired,
};

export default RadioGroup;
