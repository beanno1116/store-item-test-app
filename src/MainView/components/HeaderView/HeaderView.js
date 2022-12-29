import React from 'react';

import styles from './headerView.module.css';

const HeaderView = ({ heading }) => {
  return (
    <div className={styles.header_view}>
      <h1>{heading}</h1>
    </div>
  );
};

export default HeaderView;
