import React from 'react';

import { Container } from './styles';

interface IPros {
  title: string;
  content: string;
}

export const News: React.FC<IPros> = ({ title, content }) => {
  return (
    <Container>
      <span>{title}</span>
      <strong>{content}</strong>
    </Container>
  );
}
