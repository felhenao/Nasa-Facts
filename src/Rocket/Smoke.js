/* eslint-disable */
import React from 'react';
import styles from './Smoke.module.css';

const Smoke = () => (
  <div className={styles.smoke}>
    <video className={styles.video} autoPlay loop src="/smoke.mov" />
  </div>
);

export default Smoke;
