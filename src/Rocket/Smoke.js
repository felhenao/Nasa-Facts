/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  bottom: 0px;
  margin-top: -500px;
  z-index: 99;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  opacity: 0.5;
`;

const Smoke = () => (
  <Container>
    <Video autoPlay loop src="/smoke.mov" />
  </Container>
);

export default Smoke;
