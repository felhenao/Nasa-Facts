import React from 'react';
import styled from 'styled-components';

const MainTitle = styled.h1`
  font-family: 'Roboto', san-serif;
  font-size: 4em;
  color: white;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  margin-bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  margin-top: 0; 
  margin-bottom: 0;
  padding-top: 0.67em;
  padding-bottom: 0.67em;

  @media (max-width: 768px) {
    font-size: 3em;
  }
`;

const Title = () => (
  <MainTitle>NASA Facts</MainTitle>
);

export default Title;
