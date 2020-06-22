import React from 'react';
import { arrayOf, string, func } from 'prop-types';
import cn from 'classnames';

import optionStyles from '../sass/option-group.module.scss';

const OptionGroup = ({ options, selected, onClickHandler }) => (
  <>
    {options.map((option) => {
      const btnClasses = cn([
        optionStyles.option,
        {
          [`${optionStyles.selected}`]: selected === option,
        },
      ]);

      return (
        <button
          key={option.toLowerCase().replace(' ', '-')}
          type="button"
          value={option}
          onClick={onClickHandler}
          className={btnClasses}
        >
          {option}
        </button>
      );
    })}
  </>
);

OptionGroup.propTypes = {
  options: arrayOf(string).isRequired,
  selected: string.isRequired,
  onClickHandler: func.isRequired,
};

export default OptionGroup;
