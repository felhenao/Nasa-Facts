import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import starsImg from '../Images/stars.png';
import alphaImg from '../Images/alpha.png';
import nebulaImg from '../Images/nebula.png';

const backgroundItems = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
`;

const starGazing = keyframes`
  from { background-position: 0 0;}
  to { background-position: -10000px 5000px;}
`;

const Stars = styled.div`
  ${backgroundItems}
  background: black url(${starsImg}) repeat top center;
  z-index: -3;
`;

const Alpha = styled.div`
  ${backgroundItems}
  background: transparent url(${alphaImg}) repeat top center;
  z-index: -2;
  animation: ${starGazing} 500s linear infinite;
`;

const Nebula = styled.div`
  ${backgroundItems}
  background: transparent url(${nebulaImg}) repeat top center;
  z-index: -1;
  opacity: 0.15;
`;

const Background = () => (
  <>
    <Stars />
    <Alpha />
    <Nebula />
  </>
);

export default Background;
