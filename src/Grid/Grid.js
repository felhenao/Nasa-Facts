import React from 'react';
import GridItem from './GridItem';
import cx from 'classnames';
import styles from './Grid.module.css';
import mediaStyles from './Media.module.css';

const Grid = (props) => {
  const updateClicked = (id) => {
    this.props.updateClicked(id);
  }
  const renderFacts = () => {
    return props.facts.map(item => 
      <GridItem
        key={item.id}
        fact={item}
        updateClicked={updateClicked}
        />
    )
  }
  return (
    <section className={cx(styles.grid, mediaStyles.grid)}>
      {renderFacts()}
    </section>
  );
}

export default Grid;
