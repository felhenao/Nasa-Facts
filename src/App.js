import React from 'react';
import Title from './Title/Title';
import Background from './Background/Background';
import Grid from './Grid/Grid';
import Rocket from './Rocket/Rocket';
import Smoke from './Rocket/Smoke';

const App = () => (
  <div style={{ textAlign: 'center' }}>
    <Title />
    <Background />
    <Grid />
    <Rocket />
    <Smoke />
  </div>
);

export default App;
