import React from 'react';

import styles from './selectView.module.css';

const SelectView = ({ options, onChange }) => {
  return (
    <div className={styles.select_view}>
      <select onChange={onChange}>
        <option value={'default'}>Select store</option>
        {options.map((option) => {
          return (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectView;
