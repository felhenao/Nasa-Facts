import React from 'react';
import styled from 'styled-components';
import GridItem from './GridItem';
import facts from '../data/NASA_facts.json';

const Section = styled.section`
  padding: 175px 20px 10px 20px;
  column-gap: 10px;
  column-count: 3;

  @media (max-width: 1024px) {
    column-gap: 10px;
    column-count: 2;
    padding: 175px 10px 10px 10px;
  }

  @media (max-width: 768px) {
    column-gap: 100px;
    column-count: 1;
    padding: 175px 5px 10px 5px;
  }
`;

const Grid = () => {
  const renderFacts = () => (
    facts.map((item) => <GridItem key={item.id} fact={item} />)
  );

  return (
    <Section>
      {renderFacts()}
    </Section>
  );
};

export default Grid;
