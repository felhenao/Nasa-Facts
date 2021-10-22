import React, { Component } from 'react';
import styles from './App.module.css';
import Title from './Title/Title';
import Background from './Background/Background';
import Grid from './Grid/Grid';
import Rocket from './Rocket/Rocket';
import Smoke from './Rocket/Smoke';

// Data
import facts from './data/NASA_facts.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { facts };
  }

  updateClicked(id) {
    const stateCopy = Object.assign({}, this.state);
    stateCopy.facts[id].clicked = true;
    console.log(stateCopy);
    this.setState(stateCopy);
  }
  
  render() {
    return (
      <div className={styles.App}>
        <Title />
        <Background />
        <Grid facts={this.state.facts} updateClicked={this.updateClicked.bind(this)} />
        <Rocket />
        <Smoke />
      </div>
    );
  }
}
