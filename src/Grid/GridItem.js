/* eslint-disable */
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Badge from './Badge';
import Explorer from './Explorer';

const flash = keyframes`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;

const Container = styled.div`
  display: inline-block;
  width: 90%;
  font-family: 'Space Mono', monospace;
  color: white;
  border-radius: 3px;
  border: 1px solid rgba(168, 168, 168, 0.2);
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px 20px 25px 20px;
  margin-bottom: 10px;

  :hover {
    animation: 1s ${flash};
    border: 1px solid rgba(168, 168, 168, 0.2);
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.h2`
  margin-top: 5px;
  margin-bottom: 10px;
`;

const Fact = styled.article`
  text-align: justify;
`;

const GridItem = ({ fact }) => {
  const [clicked, setclicked] = useState(fact.clicked);

  return (
    <Container
      onClick={() => setclicked(!clicked)}
    >
      {clicked ? <Explorer /> : <Badge />}
      <Title>{fact.title}</Title>
      <Fact>{fact.fact}</Fact>
    </Container>
  );
};

export default GridItem;
