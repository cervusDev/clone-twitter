import React from 'react';

import { Container, Item, Title } from './styles';

interface IProps {
  title: string;
  elements: React.ReactNode[];
}

export const List: React.FC<IProps> = ({ elements, title }) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  );
}
