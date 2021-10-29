import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  postition: relative;
  bottom: -25px;
  width: 200px;
  margin-top: 0;
  margin-bottom: 0;
  height: auto;
  z-index: 99;
`;

const Rocket = () => (
  <>
    <Image src="/shuttle.png" alt="shuttle" />
  </>
);

export default Rocket;
