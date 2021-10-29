import React from 'react';
import cx from 'classnames';
import GridItem from './GridItem';
import styles from './Grid.module.css';
import mediaStyles from './Media.module.css';
import facts from '../data/NASA_facts.json';

const Grid = () => {
  const renderFacts = () => (
    facts.map((item) => <GridItem key={item.id} fact={item} />)
  );

  return (
    <section className={cx(styles.grid, mediaStyles.grid)}>
      {renderFacts()}
    </section>
  );
};

export default Grid;
