/* eslint-disable */
import React, { useState } from 'react';
import styles from './GridItem.module.css';
import Badge from './Badge';
import Explorer from './Explorer';

const GridItem = ({ fact }) => {
  const [clicked, setclicked] = useState(fact.clicked);

  return (
    <div
      role="article"
      className={styles.card}
      onClick={() => setclicked(!clicked)}
    >
      {clicked ? <Explorer /> : <Badge />}
      <h2 className={styles.title}>{fact.title}</h2>
      <article className={styles.fact}>{fact.fact}</article>
    </div>
  );
};

export default GridItem;
