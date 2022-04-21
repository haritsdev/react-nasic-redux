import React from 'react';

const SelectOption = ({ buah, options, changeOption }) => {
  return (
    <select value={buah} onChange={changeOption}>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default SelectOption;
